```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleLinkClick = (href) => {
    router.push(href);
  };

  return (
    <div>
      <a href="/" onClick={(e) => {
        e.preventDefault();
        handleLinkClick('/');
      }}>
        Home
      </a>
      <a href="/about" onClick={(e) => {
        e.preventDefault();
        handleLinkClick('/about');
      }}>
        About
      </a>
    </div>
  );
}

export default MyComponent; 
```