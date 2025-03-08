
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'img-blur-in w-full h-full object-cover',
        loaded && 'loaded',
        className
      )}
    />
  );
};

export default LazyImage;
