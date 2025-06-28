import { useState } from "react"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Upload, Trash2, Shield, Bell, User, Eye, EyeOff } from "lucide-react"

type TabType = "general" | "notification" | "security"

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<TabType>("general")
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [notifications, setNotifications] = useState({
        notifyMe: true,
        mobilePush: false,
        desktop: true,
        email: false,
    })
    const [security, setSecurity] = useState({
        twoFactor: false,
    })

    const tabs = [
        { id: "general" as TabType, label: "General", icon: User },
        { id: "notification" as TabType, label: "Notification", icon: Bell },
        { id: "security" as TabType, label: "Security", icon: Shield },
    ]

        const [preferences, setPreferences] = useState({
        language: "english",
        theme: "system",
        timezone: "utc",
    })

    const renderGeneralTab = () => (
        <div className="space-y-8">
        {/* Account Section */}
        <Card className="border-none shadow-none rounded-none">
            <CardHeader>
            <CardTitle>Account</CardTitle>
            <p>Real-time information your account.</p>
            </CardHeader>
            <Separator />
            
            <CardContent className="space-y-6 p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="John Onyekachi" />
                    <AvatarFallback className="bg-gray-600 text-white text-lg font-medium">JO</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
                        <h3 className="font-medium text-lg">John Onyekachi</h3>
                        <div className="flex gap-2 mt-2 md:mt-0">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                            <Upload className="h-4 w-4 mr-2" />
                            Update Picture
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Account
                        </Button>
                        </div>
                    </div>
                    </div>
                </div>
            </CardContent>
        </Card>
        

        {/* Personal Information */}
        <Card className="border-none shadow-none rounded-none">
            <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Owuakwale" />
                </div>
            </div>
            </CardContent>
        </Card>

        {/* Contact Details */}
        <Card className="border-none shadow-none rounded-none">
            <CardHeader>
            <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
            </div>
            </CardContent>
        </Card>

        {/* Password */}
        <Card className="border-none shadow-none rounded-none">
            <CardHeader>
            <CardTitle>Password</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <div className="relative">
                    <Input
                    id="currentPassword"
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Enter current password"
                    />
                    <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                </div>
                </div>
                <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                    <Input id="newPassword" type={showNewPassword ? "text" : "password"} placeholder="Enter new password" />
                    <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                </div>
                <p className="text-sm text-blue-600">Leave Password</p>
                </div>
            </div>
            </CardContent>
        </Card>

        </div>
    )

    const renderNotificationTab = () => (
        <div className="space-y-6">
        <Card className="border-none shadow-none rounded-none">
            <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Choose how you want to be notified about updates and activities.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                <Label className="text-base">Notify me when</Label>
                <p className="text-sm text-muted-foreground">Get notified about important updates and activities</p>
                </div>
                <Switch
                checked={notifications.notifyMe}
                onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, notifyMe: checked }))}
                />
            </div>
            <Separator />

            <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                <Label className="text-base">Mobile push notification</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications on your mobile device</p>
                </div>
                <Switch
                checked={notifications.mobilePush}
                onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, mobilePush: checked }))}
                />
            </div>
            <Separator />

            <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                <Label className="text-base">Desktop Notification</Label>
                <p className="text-sm text-muted-foreground">Show notifications on your desktop</p>
                </div>
                <Switch
                checked={notifications.desktop}
                onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, desktop: checked }))}
                />
            </div>
            <Separator />

            <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                <Label className="text-base">Email Notification</Label>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, email: checked }))}
                />
            </div>

            </CardContent>
        </Card>
        </div>
    )

    const renderSecurityTab = () => (
        <div className="space-y-6">
            <Card className="border-none shadow-none rounded-none">
                <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage your account security and authentication preferences.</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                        <Label className="text-base">Two factor authentication</Label>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                        </div>
                        <Switch
                        checked={security.twoFactor}
                        onCheckedChange={(checked) => setSecurity((prev) => ({ ...prev, twoFactor: checked }))}
                        />
                    </div>

                    <Separator />

                    <div className="space-y-6">
                        {/* Language & Region */}
                        <div className="flex items-center justify-between py-4">
                            <Label className="text-base">Language</Label>
                                <Select
                                    defaultValue="english"
                                    value={preferences.language}
                                    onValueChange={(value) => setPreferences((prev) => ({ ...prev, language: value }))}
                                >
                                    <SelectTrigger className="w-32">
                                    <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                    <SelectItem value="english">English</SelectItem>
                                    <SelectItem value="spanish">Español</SelectItem>
                                    <SelectItem value="french">Français</SelectItem>
                                    <SelectItem value="german">Deutsch</SelectItem>
                                    <SelectItem value="chinese">中文</SelectItem>
                                    </SelectContent>
                                </Select>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )

    const renderTabContent = () => {
        switch (activeTab) {
        case "general":
            return renderGeneralTab()
        case "notification":
            return renderNotificationTab()
        case "security":
            return renderSecurityTab()
        default:
            return renderGeneralTab()
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Get the latest updates on features, product and also when new orders come in.
                    </p>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-1 bg-white p-1 border rounded-tl-lg rounded-tr-lg border-gray-200">
            {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors  ${
                    activeTab === tab.id
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                </button>
                )
            })}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-bl-lg rounded-br-lg border border-gray-200">
                <div className="p-6">{renderTabContent()}</div>
            </div>
        </div>
        </div>
    )
}
