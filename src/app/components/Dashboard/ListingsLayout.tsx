import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Switch } from "@/app/components/ui/switch"
import { ChevronLeft, ChevronRight, Upload } from "lucide-react"

export default function CreateListing() {
    const [condition, setCondition] = useState("new")
    const [activeStep, setActiveStep] = useState("details")
    const [securityDeposit, setSecurityDeposit] = useState(true)
    // const [date, setDate] = useState<Date | undefined> (new Date(2024, 10, 10))
    // const [dateRange, setDateRange] = useState({
    //     from: new Date(2024, 10, 10),
    //     to: new Date(2024, 10, 18),
    // })
    const [deliveryOptions, setDeliveryOptions] = useState({
    pickup: false,
    delivery: false,
    })
    const availabilityOptions = 
    [
        { label: "Today", value: "today" },
        { label: "Yesterday", value: "yesterday" },
        { label: "Last week", value: "last-week" },
        { label: "Last 7 days", value: "last-7-days" },
        { label: "This month", value: "this-month" },
        { label: "Last 30 days", value: "last-30-days" },
        { label: "Custom range", value: "custom-range" },
    ]
    const [selectedAvailability, setSelectedAvailability] = useState("custom-range")

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mb-4 text-left">
                <h1 className="text-xl font-bold text-black">Create Listing</h1>
                <p className="text-sm text-gray-500">Welcome to Rentee</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="flex gap-4 p-4">
                    {/* Left sidebar */}
                    <div className="w-[220px] bg-gray-50 rounded-lg border border-gray-200 p-4 mr-4 hidden md:block">
                        <RadioGroup value={activeStep} onValueChange={setActiveStep} className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="details" id="details" />
                            <Label htmlFor="details" className="text-sm font-normal text-gray-700">
                            Details of Item
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="price" id="price" />
                            <Label htmlFor="price" className="text-sm font-normal text-gray-700">
                            Price
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="availability" id="availability" />
                            <Label htmlFor="availability" className="text-sm font-normal text-gray-700">
                            Availability
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="deposit" id="deposit" />
                            <Label htmlFor="deposit" className="text-sm font-normal text-gray-700">
                            Security Deposit
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="delivery" id="delivery" />
                            <Label htmlFor="delivery" className="text-sm font-normal text-gray-700">
                            Delivery
                            </Label>
                        </div>
                        </RadioGroup>
                    </div>

                    {/* Right content area */}
                    <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6">
                        <div className="space-y-6">
                            {/* Item Name */}
                            <div className="space-y-2">
                                <Label htmlFor="itemName" className="text-sm font-medium text-gray-700">
                                Item Name
                                </Label>
                                <Input id="itemName" placeholder="Enter name" className="w-full" />
                            </div>

                            {/* Select Category */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">Select Category</Label>
                                <Select>
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
                                <Select>
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
                                    <input
                                    type="radio"
                                    id="new"
                                    name="condition"
                                    value="new"
                                    checked={condition === "new"}
                                    onChange={() => setCondition("new")}
                                    className="h-4 w-4 text-gray-400 border-gray-300"
                                    />
                                    <Label htmlFor="new" className="text-sm font-normal text-gray-700">
                                    New
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                    type="radio"
                                    id="used"
                                    name="condition"
                                    value="used"
                                    checked={condition === "used"}
                                    onChange={() => setCondition("used")}
                                    className="h-4 w-4 text-gray-400 border-gray-300"
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
                                />
                            </div>

                            {/* Set Price */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700">Set Price</Label>
                                <div className="relative">
                                <Input placeholder="eg $10/day value to hire" className="w-full pr-12" />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                                    /day
                                </span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">Save Time & Get the Best Rates!</p>
                                <div className="mt-4">
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Recommended Price</Button>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="space-y-4 pt-4 border-t border-gray-200">
                                <h3 className="text-sm font-medium text-gray-700">Availability</h3>
                                <div className="flex">
                                    {/* Availability Options */}
                                    <div className="w-[150px] pr-4 border-r border-gray-200">
                                        {availabilityOptions.map((option) => (
                                            <div
                                                key={option.value}
                                                className={`py-2 px-3 text-sm cursor-pointer rounded ${selectedAvailability === option.value ? "bg-gray-100" : ""}`}
                                                onClick={() => setSelectedAvailability(option.value)}
                                            >
                                                {option.label}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Calendar */}
                                    <div className="flex-1 pl-4">
                                        <div className="mb-2 flex justify-between items-center">
                                            <div className="text-sm font-medium">November 2024</div>
                                                <div className="flex space-x-1">
                                                    <Button variant="ghost" size="icon" className="h-6 w-6">
                                                    <ChevronLeft className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-6 w-6">
                                                    <ChevronRight className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                        </div>
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr>
                                                    <th className="text-xs font-normal text-gray-500 p-1 text-center">Su</th>
                                                    <th className="text-xs font-normal text-gray-500 p-1 text-center">Mo</th>
                                                    <th className="text-xs font-normal text-gray-500 p-1 text-center">Tu</th>
                                                    <th className="text-xs font-normal text-gray-500 p-1 text-center">We</th>
                                                    <th className="text-xs font-normal text-gray-500 p-1 text-center">Th</th>
                                                    <th className="text-xs font-normal text-gray-500 p-1 text-center">Fr</th>
                                                    <th className="text-xs font-normal text-gray-500 p-1 text-center">Sa</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="p-1 text-center text-xs">30</td>
                                                    <td className="p-1 text-center text-xs">31</td>
                                                    <td className="p-1 text-center text-xs">1</td>
                                                    <td className="p-1 text-center text-xs">2</td>
                                                    <td className="p-1 text-center text-xs">3</td>
                                                    <td className="p-1 text-center text-xs">4</td>
                                                    <td className="p-1 text-center text-xs">5</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1 text-center text-xs">6</td>
                                                    <td className="p-1 text-center text-xs">7</td>
                                                    <td className="p-1 text-center text-xs">8</td>
                                                    <td className="p-1 text-center text-xs">9</td>
                                                    <td className="p-1 text-center text-xs bg-blue-500 text-white rounded-full">10</td>
                                                    <td className="p-1 text-center text-xs">11</td>
                                                    <td className="p-1 text-center text-xs">12</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1 text-center text-xs">13</td>
                                                    <td className="p-1 text-center text-xs">14</td>
                                                    <td className="p-1 text-center text-xs">15</td>
                                                    <td className="p-1 text-center text-xs">16</td>
                                                    <td className="p-1 text-center text-xs">17</td>
                                                    <td className="p-1 text-center text-xs">18</td>
                                                    <td className="p-1 text-center text-xs">19</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1 text-center text-xs">20</td>
                                                    <td className="p-1 text-center text-xs">21</td>
                                                    <td className="p-1 text-center text-xs">22</td>
                                                    <td className="p-1 text-center text-xs">23</td>
                                                    <td className="p-1 text-center text-xs">24</td>
                                                    <td className="p-1 text-center text-xs">25</td>
                                                    <td className="p-1 text-center text-xs">26</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-1 text-center text-xs">27</td>
                                                    <td className="p-1 text-center text-xs">28</td>
                                                    <td className="p-1 text-center text-xs">29</td>
                                                    <td className="p-1 text-center text-xs">30</td>
                                                    <td className="p-1 text-center text-xs">1</td>
                                                    <td className="p-1 text-center text-xs">2</td>
                                                    <td className="p-1 text-center text-xs">3</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="mt-4 flex justify-between items-center">
                                            <div className="text-xs text-gray-600">Nov 10, 2024 - Nov 18, 2024</div>
                                            <div className="flex space-x-2">
                                                <Button variant="outline" size="sm" className="text-xs h-7">
                                                Cancel
                                                </Button>
                                                <Button size="sm" className="text-xs h-7 bg-blue-500 hover:bg-blue-600">
                                                Done
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Security Deposit */}
                            <div className="space-y-2 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                <Label className="text-sm font-medium text-gray-700">Security Deposit</Label>
                                <Switch checked={securityDeposit} onCheckedChange={setSecurityDeposit} />
                                </div>
                                <p className="text-xs text-gray-500">
                                Collect a refundable deposit from renters to cover potential damages.
                                </p>
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
                                        setDeliveryOptions((prev) => ({ ...prev, pickup: checked === true }))
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
                                        setDeliveryOptions((prev) => ({ ...prev, delivery: checked === true }))
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
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                                        <Upload className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <p className="text-sm text-gray-600">Choose file or browse files</p>
                                    <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 5MB</p>
                                </div>
                                </div>
                            </div>

                            {/* Form Buttons */}
                            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                                <Button variant="outline" className="px-6">
                                Preview
                                </Button>
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">Submit Listing</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}
