import { useRef, useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Switch } from "@/app/components/ui/switch"

import { Upload } from "lucide-react"
import CalendarUI from "@ui/calendar-ui"
import PreviewModal from "@components/Dashboard/PreviewModal"


export default function CreateListing() {
    const [showPreview, setShowPreview] = useState(false);
    const [conditionOptions, setConditionOptions] = useState({
    new: false,
    used: false,
    });
    const [activeStep, setActiveStep] = useState("details")
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [deliveryOptions, setDeliveryOptions] = useState({
        pickup: false,
        delivery: false,
    });
    const deliveryComplete = (deliveryOptions.pickup || deliveryOptions.delivery) && Boolean(selectedFile);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };
    
    const detailsComplete = Boolean(
        itemName.trim() &&
        category.trim() &&
        location.trim() &&
        (conditionOptions.new || conditionOptions.used) &&
        description.trim()
    );
    const [priceDay, setPriceDay] = useState("");
    const [priceWeek, setPriceWeek] = useState("");
    const [priceMonth, setPriceMonth] = useState("");
    const [securityDeposit, setSecurityDeposit] = useState(false)

    const priceComplete = Boolean(
        priceDay.trim() &&
        priceWeek.trim() &&
        priceMonth.trim()
    );

    const [depositAmount, setDepositAmount] = useState("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check all required fields
        if (
            !itemName.trim() ||
            !category.trim() ||
            !location.trim() ||
            !(conditionOptions.new || conditionOptions.used) ||
            !description.trim() ||
            !priceDay.trim() ||
            !priceWeek.trim() ||
            !priceMonth.trim() ||
            !selectedDate ||
            !selectedFile
        ) {
            alert("Please fill in all required fields before submitting.");
            //replace with notification system finer than this alert later
            return;
        }

        // If all fields are filled, proceed with submission logic
        // ...submit your form here...
    };

    // const availabilityOptions = 
    // [
    //     { label: "Today", value: "today" },
    //     { label: "Yesterday", value: "yesterday" },
    //     { label: "Last week", value: "last-week" },
    //     { label: "Last 7 days", value: "last-7-days" },
    //     { label: "This month", value: "this-month" },
    //     { label: "Last 30 days", value: "last-30-days" },
    //     { label: "Custom range", value: "custom-range" },
    // ]
    // const [selectedAvailability, setSelectedAvailability] = useState("custom-range")
    const [depositAmount, setDepositAmount] = useState("");
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mb-4 text-left px-4">
                <h1 className="text-xl font-bold text-black">Create Listing</h1>
                <p className="text-sm text-gray-500">Welcome to Rentee</p>
            </div>

            <div className="bg-gray-50 overflow-hidden">
                <div className="flex gap-4 p-4">
                    {/* Left sidebar */}
                    <div className="w-[220px] max-h-[470px] bg-white rounded-2xl border border-gray-200 p-4 mr-4 hidden md:block">
                        <RadioGroup value={activeStep} onValueChange={setActiveStep} className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem 
                                value="details"
                                id="details" 
                                className={detailsComplete ? "border-purple-500 bg-purple-500  data-[state=checked]:bg-purple-500 data-[state=checked]:text-white" : ""}
                                />
                                <Label htmlFor="details" className="text-sm font-normal text-gray-700">
                                Details of Item
                                </Label>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem 
                                value="price" 
                                id="price" 
                                className={priceComplete ? "border-purple-500 bg-purple-500  data-[state=checked]:bg-purple-500 data-[state=checked]:text-white" : ""}
                                />
                                <Label htmlFor="price" className="text-sm font-normal text-gray-700">
                                Price
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem 
                                value="availability" 
                                id="availability"
                                className={selectedDate ? "border-purple-500 bg-purple-500 data-[state=checked]:bg-purple-500 data-[state=checked]:text-white" : ""}/>
                                <Label htmlFor="availability"
                                className="text-sm font-normal text-gray-700">
                                Availability
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem 
                                value="deposit" 
                                id="deposit" 
                                className={securityDeposit ? "border-purple-500 bg-purple-500 data-[state=checked]:bg-purple-500 data-[state=checked]:text-white" : ""}/>
                                <Label htmlFor="deposit" className="text-sm font-normal text-gray-700">
                                Security Deposit
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem 
                                value="delivery" 
                                id="delivery" 
                                className={deliveryComplete ? "border-purple-500 bg-purple-500 data-[state=checked]:bg-purple-500 data-[state=checked]:text-white" : ""}
                                />
                                <Label htmlFor="delivery" className="text-sm font-normal text-gray-700">
                                Delivery
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Right content area */}
                    <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-6">
                        <div className="space-y-6">
                            {/* Item Name */}
                            <div className="space-y-2">
                                <Label htmlFor="itemName" className="text-sm font-medium text-gray-700">
                                Item Name
                                </Label>
                                <Input id="itemName"
                                placeholder="Enter name" 
                                className="w-full" 
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                                />
                            </div>

                            {/* Select Category */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">Select Category</Label>
                                <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="sound">Sound</SelectItem>
                                    <SelectItem value="computer & Accessories">Computer & Accessories</SelectItem>
                                    <SelectItem value="projector & TVs">Projector & TVs</SelectItem>
                                    <SelectItem value="cameras">Cameras</SelectItem>
                                    <SelectItem value="monitors">Monitors</SelectItem>
                                    <SelectItem value="camera-lenses">Camera Lenses</SelectItem>
                                    <SelectItem value="tents-marquees">Tents, Marquees & Event Centers</SelectItem>
                                    <SelectItem value="party-furnitures">Party Furnitures</SelectItem>
                                    <SelectItem value="party-decorations">Party Decorations</SelectItem>
                                </SelectContent>
                                </Select>
                            </div>

                            {/* Location */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">Location</Label>
                                <Select value={location} onValueChange={setLocation}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="lagos">Lagos</SelectItem>
                                    <SelectItem value="ogun">Ogun</SelectItem>
                                    <SelectItem value="abuja">Abuja</SelectItem>
                                    <SelectItem value="port-harcount">Port-harcount</SelectItem>
                                    <SelectItem value="oyo">Oyo</SelectItem>
                                    <SelectItem value="delta">Delta</SelectItem>
                                    <SelectItem value="imo">Imo</SelectItem>
                                    <SelectItem value="calabar">Calabar</SelectItem>
                                    <SelectItem value="benin">Benin</SelectItem>
                                </SelectContent>
                                </Select>
                            </div>

                            {/* Condition */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">Condition</Label>
                                <div className="flex space-x-6">
                                    <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="new"
                                        checked={conditionOptions.new}
                                        onCheckedChange={(checked) =>
                                        setConditionOptions((prev) => ({ ...prev, new: Boolean(checked) }))
                                        }
                                    />
                                    <Label htmlFor="new" className="text-sm font-normal text-gray-700">
                                        New
                                    </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="used"
                                            checked={conditionOptions.used}
                                            onCheckedChange={(checked) =>
                                            setConditionOptions((prev) => ({ ...prev, used: Boolean(checked) }))
                                            }
                                        />
                                        <Label htmlFor="used" className="text-sm font-normal text-gray-700">
                                            Used
                                        </Label>
                                        </div>
                                    </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                                Description
                                </Label>
                                <Textarea
                                id="description"
                                placeholder="Enter description"
                                className="w-full min-h-[100px] resize-none"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                />
                            </div>

                            {/* Set Price */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">Set Price</Label>

                                {/* Day Price */}
                                <div className="flex items-center w-full">
                                    <div className="relative w-1/2 md:w-1/4">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">₦</span>
                                    <Input
                                        type="number"
                                        inputMode="numeric"
                                        placeholder="20,000"
                                        className="pl-7 rounded-md w-full"
                                        value={priceDay}
                                        onChange={e => {
                                        const value = e.target.value;
                                        setPriceDay(value);
                                        // Only update if value is a valid number
                                        const num = parseFloat(value.replace(/,/g, ""));
                                        if (!isNaN(num)) {
                                            setPriceWeek((num * 7).toString());
                                            setPriceMonth((num * 7 * 4).toString());
                                        } else {
                                            setPriceWeek("");
                                            setPriceMonth("");
                                        }
                                        }}
                                    />
                                    </div>
                                    <span className="inline-block bg-white px-2 py-2 text-sm text-gray-500">
                                    /day
                                    </span>
                                </div>

                                {/* Week Price */}
                                <div className="flex items-center w-full">
                                    <div className="relative w-1/2 md:w-1/4">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">₦</span>
                                    <Input
                                        type="number"
                                        inputMode="numeric"
                                        placeholder="140,000"
                                        className="pl-7 rounded-md w-full bg-gray-100"
                                        value={priceWeek}
                                        readOnly
                                    />
                                    </div>
                                    <span className="inline-block bg-white px-2 py-2 text-sm text-gray-500">
                                    /week
                                    </span>
                                </div>

                                {/* Month Price */}
                                <div className="flex items-center w-full">
                                    <div className="relative w-1/2 md:w-1/4">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">₦</span>
                                    <Input
                                        type="number"
                                        inputMode="numeric"
                                        placeholder="140,000"
                                        className="pl-7 rounded-md w-full bg-gray-100"
                                        value={priceMonth}
                                        readOnly
                                    />
                                    </div>
                                    <span className="inline-block bg-white px-2 py-2 text-sm text-gray-500">
                                    /month
                                    </span>
                                </div>

                                <p className="text-sm text-gray-600 mt-1">
                                    Here’s your recommended weekly and monthly price!
                                    <br /> you can choose to edit it.
                                </p>
                                <div className="mt-4">
                                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">Recommended Price</Button>
                                </div>
                            </div>
                            {/* <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">Set Price</Label>
                                <div className="flex items-center w-full">
                                    <div className="relative w-1/2 md:w-1/4">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">₦</span>
                                        <Input
                                        type="number"
                                        inputMode="numeric"

                                        placeholder="20,000"
                                        className="pl-7 rounded-md w-full"
                                        value={priceDay}
                                        onChange={e => setPriceDay(e.target.value)}
                                        />
                                    </div>
                                    <span className="inline-block bg-white px-2 py-2 text-sm text-gray-500">
                                        /day
                                    </span>
                                </div>

                                <div className="flex items-center w-full">
                                    <div className="relative w-1/2 md:w-1/4">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">₦</span>
                                        <Input
                                        type="number"
                                        inputMode="numeric"
                                        placeholder="140,000"
                                        className="pl-7 rounded-md w-full bg-gray-400"
                                        value={priceWeek}
                                        onChange={e => setPriceWeek(e.target.value)}
                                        />
                                    </div>
                                    <span className="inline-block bg-white px-2 py-2 text-sm text-gray-500">
                                        /week
                                    </span>
                                </div>

                                <div className="flex items-center w-full">
                                    <div className="relative w-1/2 md:w-1/4">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">₦</span>
                                        <Input
                                        type="number"
                                        inputMode="numeric"
                                        placeholder="140,000"
                                        className="pl-7 rounded-md w-full bg-gray-400"
                                        value={priceMonth}
                                        onChange={e => setPriceMonth(e.target.value)}
                                        />
                                    </div>
                                    <span className="inline-block bg-white px-2 py-2 text-sm text-gray-500">
                                        /month
                                    </span>
                                </div>

                                <p className="text-sm text-gray-600 mt-1">Here’s your recommended weekly and monthly price!
                                    <br /> you can choose to edit it.</p>
                                <div className="mt-4">
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Recommended Price</Button>
                                </div>
                            </div> */}

                            {/* Availability */}
                            <h3 className="text-sm font-medium text-black-700">Availability</h3>
                                <CalendarUI 
                                value={selectedDate}
                                onChange={(date: Date) => {
                                    setSelectedDate(date);
                                    setActiveStep("availability");
                                }}
                                />

                            {/* Availability */}
                            <h3 className="text-sm font-medium text-black-700">Availability</h3>
                                <CalendarUI />

                            {/* Security Deposit */}
                            <div className="space-y-2 pt-4 border-t border-gray-200">
                                <div className="flex items-center">
                                    <Switch checked={securityDeposit} onCheckedChange={setSecurityDeposit} required />
                                    <Label className="text-sm font-medium text-gray-700 ml-2">
                                    Security Deposit
                                    </Label>
                                </div>
                                <p className="text-xs text-gray-500 text-left">
                                    Protect your item! Collect a refundable deposit from renters to cover potential damages.
                                </p>
                                {securityDeposit && (
                                    <div className="relative mt-2 w-1/2">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">₦</span>
                                        <Input
                                        type="number"
                                        inputMode="numeric"
                                        placeholder="Enter security deposit amount"
                                        className="pl-7 w-1/2"
                                        value={depositAmount}
                                        onChange={e => setDepositAmount(e.target.value)}
                                        />
                                    </div>
)}
                            </div>

                            {/* Set Delivery Options */}
                            <div className="space-y-3 pt-4 border-t border-gray-200">
                                <Label className="text-sm font-medium text-gray-700">Set Delivery Options</Label>
                                <div className="flex space-x-6">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                    id="pickup"
                                    checked={deliveryOptions.pickup}
                                    onCheckedChange={(checked) =>
                                        setDeliveryOptions((prev) => ({ ...prev, pickup: Boolean(checked) }))
                                    }
                                    />
                                    <Label htmlFor="pickup" className="text-sm font-normal text-gray-700">
                                    Pickup
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                    id="delivery"
                                    checked={deliveryOptions.delivery}
                                    onCheckedChange={(checked) =>
                                        setDeliveryOptions((prev) => ({ ...prev, delivery: Boolean(checked) }))
                                    }
                                    />
                                    <Label htmlFor="delivery" className="text-sm font-normal text-gray-700">
                                    Delivery
                                    </Label>
                                </div>
                                </div>
                            </div>

                            {/* Upload Image */}
                            <div className="space-y-3 pt-4 border-t border-gray-200">
                                <Label className="text-sm font-medium text-gray-700">Upload image</Label>
                                <div
                                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer"
                                    onClick={() => fileInputRef.current?.click()}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputRef}
                                        className="hidden"
                                        onChange={handleFileChange}
                                        required
                                    />
                                    <div className="flex flex-col items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                                            <Upload className="h-5 w-5 text-gray-500" />
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {selectedFile ? selectedFile.name : "Choose file or browse files"}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 5MB</p>
                                        {selectedFile && (
                                            <img
                                                src={URL.createObjectURL(selectedFile)}
                                                alt="Preview"
                                                className="mt-2 mx-auto h-24 rounded"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Form Buttons */}
                            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                                <Button className="px-6" onClick={() => setShowPreview(true)}>

                                Preview
                                </Button>
                                <Button type="submit"className="bg-purple-600 hover:bg-purple-700 text-white px-6">
                                    Submit Listing
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        <PreviewModal 
        isOpen={showPreview} 
        onClose={
            () => setShowPreview(false)
        } />
        </div>
)
}
