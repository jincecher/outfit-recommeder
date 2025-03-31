import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, Wand2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">
            TREND TAILOR
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/outfit-generator" className="hover:text-primary">
              Outfit Generator
            </Link>
            <Link href="/cart" className="relative hover:text-primary">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Perfect Outfit with AI</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Upload a single clothing item and our AI will generate complete outfit combinations based on current
              fashion trends, with shopping links included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/outfit-generator">
                <Button size="lg" className="gap-2">
                  Try Outfit Generator <Wand2 className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" variant="outline" className="gap-2">
                  Create Account <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Item</h3>
                <p className="text-muted-foreground">
                  Take a photo of any clothing item you own or like and upload it to our platform.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Magic</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your item and generates three stylish outfit combinations based on current trends.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Shop the Look</h3>
                <p className="text-muted-foreground">
                  Browse the recommended items, add them to your cart, and complete your perfect outfit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 StyleAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

