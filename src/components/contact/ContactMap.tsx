'use client'

import { useEffect, useRef } from 'react'

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<unknown>(null)

  useEffect(() => {
    if (mapInstance.current || !mapRef.current) return

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js'
    script.async = true

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css'
    document.head.appendChild(link)

    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const maplibre = (window as any).maplibregl
      if (!maplibre || !mapRef.current || mapInstance.current) return

      const lngLat: [number, number] = [55.2708, 25.2048]

      const map = new maplibre.Map({
        container: mapRef.current,
        style: 'https://tiles.openfreemap.org/styles/liberty',
        center: lngLat,
        zoom: 13,
        attributionControl: { compact: true },
      })

      map.addControl(new maplibre.NavigationControl({ showCompass: false }), 'top-right')
      new maplibre.Marker({ color: '#F5A623' }).setLngLat(lngLat).addTo(map)
      mapInstance.current = map
    }

    document.head.appendChild(script)

    return () => {
      if (mapInstance.current) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(mapInstance.current as any).remove()
        } catch {
          // ignore
        }
        mapInstance.current = null
      }
    }
  }, [])

  return (
    <div
      ref={mapRef}
      style={{
        marginTop: 18,
        height: 240,
        borderRadius: 12,
        overflow: 'hidden',
        background: '#E6E9F0',
      }}
    />
  )
}
