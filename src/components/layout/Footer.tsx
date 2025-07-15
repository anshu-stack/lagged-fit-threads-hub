import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Lagged Fit</h3>
            <p className="text-muted-foreground text-sm">
              Premium streetwear for the modern lifestyle. Quality clothing that fits your vibe.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/t-shirts" className="text-muted-foreground hover:text-foreground">T-Shirts</Link></li>
              <li><Link to="/category/hoodies" className="text-muted-foreground hover:text-foreground">Hoodies</Link></li>
              <li><Link to="/category/jeans" className="text-muted-foreground hover:text-foreground">Jeans</Link></li>
              <li><Link to="/category/accessories" className="text-muted-foreground hover:text-foreground">Accessories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-foreground">Returns</Link></li>
              <li><Link to="/size-guide" className="text-muted-foreground hover:text-foreground">Size Guide</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Lagged Fit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}