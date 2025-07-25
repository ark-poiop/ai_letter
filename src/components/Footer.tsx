import { Github, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              거시적 관점에서 AI 기술과 트렌드를 분석하는 전문 플랫폼입니다. 
              질문이나 피드백은 언제든 환영합니다.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/ark-poiop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
            <a 
              href="mailto:your-email@example.com"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              이메일
            </a>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AI NEWS INSIGHT. 모든 분석은 전문적 견해입니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;