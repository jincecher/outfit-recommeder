"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Wand2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function OutfitGeneratorPage() {
  const router = useRouter()
  const [image, setImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            setImage(event.target.result as string)
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = () => {
    if (!image) return

    setIsGenerating(true)
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false)
      router.push("/outfit-results")
    }, 3000)
  }

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Outfit Generator</h1>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Upload a photo of any clothing item, and our AI will generate three stylish outfit combinations based on current
        fashion trends.
      </p>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors",
              isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50",
              image ? "py-6" : "py-16",
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            {image ? (
              <div className="space-y-4">
                <div className="relative w-64 h-64 mx-auto">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt="Uploaded clothing item"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">Click or drag to upload a different image</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-base font-medium">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground mt-1">JPG, PNG or GIF (max. 5MB)</p>
                </div>
              </div>
            )}
            <input id="file-upload" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button size="lg" className="gap-2" disabled={!image || isGenerating} onClick={handleGenerate}>
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating Outfits...
            </>
          ) : (
            <>
              <Wand2 className="h-4 w-4" />
              Generate Outfit Combinations
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

