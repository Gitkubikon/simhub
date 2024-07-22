<script lang="ts">
  import SceneView from "@arcgis/core/views/SceneView";
  import EsriMap from "@arcgis/core/Map";
  import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
  import Graphic from "@arcgis/core/Graphic";
  import Point from "@arcgis/core/geometry/Point";
  import Polyline from "@arcgis/core/geometry/Polyline";
  import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
  import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
  import esriConfig from "@arcgis/core/config";
  import Basemap from "@arcgis/core/Basemap";
  import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
  import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
  import { onMount, onDestroy } from "svelte";

  export const id = "contact-map";

  let mapcontainer: HTMLDivElement;
  let map;
  let view: SceneView;
  let dataLayer = new GraphicsLayer();

  const accessToken =
    "AAPKfb786cc2758148739175c3ec34911c15ZmP9fvQ4IkY-MIc7PqC8pirSsJPVFRXx68tuu71NEskmmiWOCf2EEhMHvilOFZlQ";
  esriConfig.apiKey = accessToken;

  const addressPoint = new Point({
    longitude: 11.4260974,
    latitude: 48.7651622,
    z: 200,
  });

  const groundPoint = new Point({
    longitude: 11.4260974,
    latitude: 48.7651622,
    z: 0, // Ground level
  });

  const markerSymbol = new SimpleMarkerSymbol({
    color: [156, 39, 176], // Yellow color
    outline: {
      color: [156, 39, 176, 0.6], // Yellow glow with opacity
      width: 22, // Increase width for the glow effect
    },
    size: "22px", // Adjust size as needed
    style: "circle", // Marker shape
  });

  const lineSymbol = new SimpleLineSymbol({
    color: [156, 39, 176, 0.8], // Yellow color with some opacity
    width: 2, // Line width
  });

  const addressGraphic = new Graphic({
    geometry: addressPoint,
    symbol: markerSymbol,
  });

  const line = new Polyline({
    paths: [
      [
        [groundPoint.longitude, groundPoint.latitude, groundPoint.z],
        [addressPoint.longitude, addressPoint.latitude, addressPoint.z],
      ],
    ],
    spatialReference: { wkid: 4326 },
  });

  const lineGraphic = new Graphic({
    geometry: line,
    symbol: lineSymbol,
  });

  const initializeMap = async () => {
    try {
      const basemap = new Basemap({
        baseLayers: [
          new VectorTileLayer({
            portalItem: { id: "96a7dfbbadc0457faa3031a7f86c1b67" },
          }),
        ],
      });

      const buildingLayer = new BuildingSceneLayer({
        portalItem: {
          id: "ca0470dbbddb4db28bad74ed39949e25", // Example ID for a BuildingSceneLayer, change if needed
        },
      });

      map = new EsriMap({
        basemap: basemap,
        layers: [dataLayer, buildingLayer],
      });

      view = new SceneView({
        container: mapcontainer,
        map: map,
        camera: {
          position: {
            latitude: 0, // Starting from the equator
            longitude: 0, // Starting from the prime meridian
            z: 50000000, // High altitude for global view
          },
          tilt: 0,
        },
        environment: {
          atmosphereEnabled: false,
          starsEnabled: true,
        },
        ui: { components: [] },
      });

      view.when(() => {
        console.log("Map view is ready");
        dataLayer.addMany([addressGraphic, lineGraphic]);
        console.log("Address graphic and line added to data layer");

        // Fly to animation
        view
          .goTo(
            {
              center: [11.4260974, 48.7651622],
              zoom: 16,
              tilt: 70,
              heading: 0,
            },
            {
              duration: 5000, // 5 seconds
            },
          )
          .catch(function (error) {
            if (error.name !== "AbortError") {
              console.error("GoTo error: ", error);
            }
          });
      });
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  };

  onMount(() => {
    console.log("Component mounted, initializing map");
    initializeMap();
  });

  onDestroy(() => {
    view?.destroy();
    console.log("Component destroyed, map view destroyed");
  });
</script>

<div bind:this={mapcontainer} class="map-container"></div>

<style>
  .map-container {
    height: 100%; /* Ensure the container takes full height */
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0 60px rgba(14, 15, 26, 0.6);

  }
</style>
