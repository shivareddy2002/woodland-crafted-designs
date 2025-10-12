import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectLocationsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const [totalProjects] = useState(100);

  const locations = [
    { city: 'New York', coords: [40.7128, -74.0060], projects: 25 },
    { city: 'Los Angeles', coords: [34.0522, -118.2437], projects: 20 },
    { city: 'Chicago', coords: [41.8781, -87.6298], projects: 15 },
    { city: 'Houston', coords: [29.7604, -95.3698], projects: 12 },
    { city: 'Phoenix', coords: [33.4484, -112.0740], projects: 10 },
    { city: 'Miami', coords: [25.7617, -80.1918], projects: 8 },
    { city: 'Seattle', coords: [47.6062, -122.3321], projects: 10 },
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Create red marker icon
    const redIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="position: relative;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#DC2626" stroke="#fff" stroke-width="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3" fill="#fff"/>
          </svg>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });
    
    // Initialize map centered on USA
    map.current = L.map(mapContainer.current).setView([37.0902, -95.7129], 4);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Add markers for each location
    locations.forEach((location) => {
      const marker = L.marker([location.coords[0], location.coords[1]], { icon: redIcon })
        .addTo(map.current!);

      // Create popup content
      const popupContent = `
        <div style="padding: 8px; font-family: system-ui; min-width: 200px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
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
      `;

      marker.bindPopup(popupContent);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section id="project-map" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Presence Across the USA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Project Footprint Across the United States
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
                      <div className="w-4 h-4 rounded-full border-2 border-white shadow-md bg-red-600" />
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
              From New York to Los Angeles
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
                Expanding our footprint — coming soon to Boston & Denver! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLocationsMap;
