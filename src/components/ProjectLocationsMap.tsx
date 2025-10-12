import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const ProjectLocationsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSubmitted, setTokenSubmitted] = useState(false);
  const [totalProjects] = useState(100);

  const locations = [
    { city: 'Hyderabad', coords: [78.4867, 17.3850], projects: 30, color: '#8B4513' },
    { city: 'Bengaluru', coords: [77.5946, 12.9716], projects: 20, color: '#A0522D' },
    { city: 'Mumbai', coords: [72.8777, 19.0760], projects: 15, color: '#8B4513' },
    { city: 'Kadapa', coords: [78.8242, 14.4673], projects: 10, color: '#D2691E' },
    { city: 'Chennai', coords: [80.2707, 13.0827], projects: 10, color: '#D2691E' },
    { city: 'Pune', coords: [73.8567, 18.5204], projects: 8, color: '#CD853F' },
    { city: 'Vizag', coords: [83.2185, 17.6868], projects: 7, color: '#CD853F' },
  ];

  useEffect(() => {
    if (!mapContainer.current || !tokenSubmitted || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [78.9629, 20.5937], // Center of India
      zoom: 4.5,
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      locations.forEach((location) => {
        // Create custom marker element
        const markerEl = document.createElement('div');
        markerEl.className = 'custom-marker';
        markerEl.style.width = location.projects > 15 ? '50px' : '40px';
        markerEl.style.height = location.projects > 15 ? '50px' : '40px';
        markerEl.style.backgroundColor = location.color;
        markerEl.style.borderRadius = '50%';
        markerEl.style.border = '3px solid white';
        markerEl.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        markerEl.style.display = 'flex';
        markerEl.style.alignItems = 'center';
        markerEl.style.justifyContent = 'center';
        markerEl.style.fontSize = location.projects > 15 ? '16px' : '14px';
        markerEl.style.fontWeight = 'bold';
        markerEl.style.color = 'white';
        markerEl.style.cursor = 'pointer';
        markerEl.style.transition = 'transform 0.3s ease';
        markerEl.textContent = location.projects.toString();

        markerEl.addEventListener('mouseenter', () => {
          markerEl.style.transform = 'scale(1.2)';
        });

        markerEl.addEventListener('mouseleave', () => {
          markerEl.style.transform = 'scale(1)';
        });

        // Create popup
        const popup = new mapboxgl.Popup({ 
          offset: 25,
          closeButton: false,
          className: 'custom-popup'
        }).setHTML(`
          <div style="padding: 8px; font-family: system-ui;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B4513" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <strong style="font-size: 16px; color: #333;">${location.city}</strong>
            </div>
            <div style="color: #666; font-size: 14px; margin-bottom: 4px;">
              <strong style="color: #8B4513;">${location.projects} Projects</strong> Completed
            </div>
            <div style="color: #999; font-size: 12px; font-style: italic;">
              Premium interiors and custom woodcraft solutions delivered here!
            </div>
          </div>
        `);

        // Add marker to map
        new mapboxgl.Marker(markerEl)
          .setLngLat(location.coords as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [tokenSubmitted, mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setTokenSubmitted(true);
    }
  };

  return (
    <section id="project-map" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Presence Across India</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Project Footprint Across India
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover where our craftsmanship has brought beauty and functionality to homes and offices across the nation.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{totalProjects}+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{locations.length}</div>
              <div className="text-sm text-muted-foreground">Major Cities</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </CardContent>
          </Card>
        </div>

        {/* Map Container */}
        {!tokenSubmitted ? (
          <Card className="max-w-2xl mx-auto animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Interactive Map Setup</h3>
                <p className="text-sm text-muted-foreground">
                  To view the interactive project locations map, please enter your Mapbox public token.
                  <br />
                  Get your free token at{' '}
                  <a 
                    href="https://mapbox.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    mapbox.com
                  </a>
                </p>
              </div>
              <form onSubmit={handleTokenSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter your Mapbox public token (pk.ey...)"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="w-full"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={!mapboxToken.trim()}
                >
                  Load Interactive Map
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div 
              ref={mapContainer} 
              className="w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden border-4 border-border"
            />

            {/* City Legend */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Project Distribution by City
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {locations
                  .sort((a, b) => b.projects - a.projects)
                  .map((location) => (
                    <div 
                      key={location.city}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: location.color }}
                      />
                      <div>
                        <div className="font-semibold text-sm text-foreground">{location.city}</div>
                        <div className="text-xs text-muted-foreground">{location.projects} projects</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                From Hyderabad to Mumbai
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We've proudly completed over {totalProjects} premium interior and woodcraft projects, transforming spaces with precision and passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#portfolio">
                  <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
                    View Our Portfolio
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground italic">
                  Expanding our footprint — coming soon to Delhi & Kochi! 🚀
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectLocationsMap;
