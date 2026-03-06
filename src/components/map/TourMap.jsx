import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
  MapRoute,
} from "@/components/ui/map"

export default function TourMap({ route, stops }) {

  return (
    <div className="h-[450px] w-full rounded-3xl overflow-hidden">

      <Map center={route[0]} zoom={8}>

        <MapRoute
          coordinates={route}
          color="#0ea5e9"
          width={4}
          opacity={0.8}
        />

        {stops.map((stop, index) => (
          <MapMarker
            key={stop.name}
            longitude={stop.lng}
            latitude={stop.lat}
          >

            <MarkerContent>
              <div className="size-5 rounded-full bg-primary border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-semibold">
                {index + 1}
              </div>
            </MarkerContent>

            <MarkerTooltip>
              {stop.name}
            </MarkerTooltip>

          </MapMarker>
        ))}

      </Map>

    </div>
  )
}