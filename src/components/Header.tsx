import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Simple Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              뉴스
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              분석
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              소개
            </a>
          </nav>

          {/* GitHub Link */}
          <div className="flex items-center">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/ark-poiop" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;