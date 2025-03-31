"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Heart, Share2, ArrowLeft } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data for outfit combinations
const outfitCombinations = [
  {
    id: 1,
    name: "Casual Chic",
    items: [
      {
        id: 101,
        name: "White Sneakers",
        brand: "Nike",
        price: 89.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 102,
        name: "Slim Fit Jeans",
        brand: "Levi's",
        price: 69.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 103,
        name: "Oversized Blazer",
        brand: "Zara",
        price: 119.99,
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    id: 2,
    name: "Office Ready",
    items: [
      {
        id: 201,
        name: "Leather Loafers",
        brand: "Cole Haan",
        price: 149.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 202,
        name: "Tailored Trousers",
        brand: "Banana Republic",
        price: 89.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 203,
        name: "Button-Up Shirt",
        brand: "J.Crew",
        price: 59.99,
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    id: 3,
    name: "Weekend Vibes",
    items: [
      {
        id: 301,
        name: "Canvas Shoes",
        brand: "Vans",
        price: 59.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 302,
        name: "Cargo Pants",
        brand: "H&M",
        price: 49.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 303,
        name: "Graphic T-Shirt",
        brand: "Uniqlo",
        price: 24.99,
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
]

export default function OutfitResultsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("outfit-1")

  const handleAddToCart = (itemId: number, itemName: string) => {
    toast({
      title: "Added to cart",
      description: `${itemName} has been added to your cart.`,
    })
  }

  const handleSaveOutfit = (outfitId: number, outfitName: string) => {
    toast({
      title: "Outfit saved",
      description: `${outfitName} has been saved to your favorites.`,
    })
  }

  const handleShareOutfit = () => {
    toast({
      title: "Share link copied",
      description: "Outfit share link has been copied to clipboard.",
    })
  }

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <div className="flex items-center mb-8">
        <Link href="/outfit-generator" className="flex items-center text-muted-foreground hover:text-foreground mr-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Link>
        <h1 className="text-3xl font-bold">Your AI-Generated Outfit Combinations</h1>
      </div>

      <div className="mb-8">
        <p className="text-muted-foreground">
          Based on your uploaded item, our AI has generated these three outfit combinations that match current fashion
          trends. Browse through each outfit and add items to your cart.
        </p>
      </div>

      <Tabs defaultValue="outfit-1" value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="outfit-1">Casual Chic</TabsTrigger>
          <TabsTrigger value="outfit-2">Office Ready</TabsTrigger>
          <TabsTrigger value="outfit-3">Weekend Vibes</TabsTrigger>
        </TabsList>

        {outfitCombinations.map((outfit, index) => (
          <TabsContent key={outfit.id} value={`outfit-${index + 1}`} className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{outfit.name}</h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1"
                  onClick={() => handleSaveOutfit(outfit.id, outfit.name)}
                >
                  <Heart className="h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm" className="gap-1" onClick={handleShareOutfit}>
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outfit.items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2">{item.brand}</Badge>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-primary font-medium">${item.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full gap-2" onClick={() => handleAddToCart(item.id, item.name)}>
                      <ShoppingBag className="h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex justify-center">
        <Link href="/outfit-generator">
          <Button variant="outline" size="lg">
            Generate Another Outfit
          </Button>
        </Link>
      </div>
    </div>
  )
}

