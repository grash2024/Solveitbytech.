import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-auto border-white/10 bg-secondary/30 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-bold text-white">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="mt-6">
            <Link href="/">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Return Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
