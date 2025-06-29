import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@components/ui/card"
import { Search } from "lucide-react"
import { Link } from "react-router-dom"

type Product = {
    id: number;
    image: string;
    price: string;
    period: string;
    title: string;
    description: string;
};

interface ListingsProps {
    products: Product[];
}

export default function Listings({ products }: ListingsProps) {

    return (
        <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Listings</h1>
                        <p className="text-sm text-gray-500">
                        List all activities on featured, on hold and also when new actions can be
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
                        <Link to="/create-listings">
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
                            Add Product
                            </Button>
                        </Link>
                        <div className="relative w-full md:w-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input placeholder="Search by Name / Category / ID" className="pl-10 w-full md:w-80 bg-white border border-y-indigo-400" />
                        </div>
                    </div>
                </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <Card key={product.id} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                    />
                    </div>
                    <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg font-semibold text-purple-600">{product.price}</span>
                        <span className="text-sm text-gray-500">{product.period}</span>
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm leading-tight">{product.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{product.description}</p>
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
        </div>
    )
}
