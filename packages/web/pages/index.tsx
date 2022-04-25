import type { NextPage } from "next";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";
import { TradeClipboard } from "../components/trade-clipboard";
import { ProgressiveSvgImage } from "../components/progressive-svg-image";
import { useEffect, useMemo, useRef, useState } from "react";

const Home: NextPage = observer(function () {
  const { chainStore, queriesStore } = useStore();

  const containerRef = useRef<HTMLElement | null>(null);
  const clipboardRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState<
    | {
        width: number;
        height: number;
      }
    | undefined
  >(undefined);
  const [clipboardWidth, setClipboardWidth] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    // There seems to be no resize event for each element.
    // Instead, the container size is calculated each time the window is resized.
    // In other words, the operation of the container is guaranteed only when the container is not changed except for window resize.
    const onResize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
      if (clipboardRef.current) {
        setClipboardWidth(clipboardRef.current.clientWidth);
      }
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const chainInfo = chainStore.osmosis;

  const queries = queriesStore.get(chainInfo.chainId);
  const queryPools = queries.osmosis.queryGammPools;

  const pools = useMemo(() => {
    return queryPools.pools.map((pool) => pool.pool);
  }, [queryPools.pools]);

  const imageRatio = 1300 / 900;

  const defaultDesktopSidebarWidthPx = 206;
  const defaultClipboardWidthPx = 516;

  // Set this based on the screen height 1080px.
  const clipboardMinLeftPx = 920;
  const clipboardPositionLeft = 0.8;

  return (
    <main className="relative bg-background h-screen" ref={containerRef}>
      <div className="absolute w-full h-full bg-home-bg-pattern bg-repeat-x bg-cover">
        <svg
          className="w-full h-full"
          pointerEvents="none"
          viewBox="0 0 1300 900"
          height="900"
          preserveAspectRatio={(() => {
            let ratio = imageRatio;

            if (!containerSize) {
              if (typeof window !== "undefined") {
                ratio =
                  (window.innerWidth - defaultDesktopSidebarWidthPx) /
                  window.innerHeight;
              }
            } else {
              ratio = containerSize.width / containerSize.height;
            }

            return ratio > imageRatio ? "xMinYMid meet" : "xMidYMid slice";
          })()}
        >
          <g>
            <ProgressiveSvgImage
              lowResXlinkHref="/images/osmosis-home-bg-low.png"
              xlinkHref="/images/osmosis-home-bg.png"
              x="56"
              y="97"
              width="578.7462"
              height="725.6817"
            />
            <rect x="-3000" y="778" width="8660" height="244" fill="#120644" />
            <ProgressiveSvgImage
              lowResXlinkHref="/images/osmosis-home-fg-low.png"
              xlinkHref="/images/osmosis-home-fg.png"
              x="61"
              y="602"
              width="448.8865"
              height="285.1699"
            />
          </g>
        </svg>
      </div>
      <div className="absolute w-full h-full flex items-center overflow-x-hidden overflow-y-auto">
        <TradeClipboard
          ref={clipboardRef}
          containerClassName="w-full max-w-[32.5rem]"
          containerStyle={{
            ["--clipboardMinLeft" as any]: `calc(${clipboardMinLeftPx} * (100vh / 1080))`,
            ["--clipboardPositionLeft" as any]: `calc((${
              containerSize
                ? containerSize.width + "px"
                : `100vw - ${defaultDesktopSidebarWidthPx}px`
            }) * ${clipboardPositionLeft} - ${
              clipboardWidth ? clipboardWidth : defaultClipboardWidthPx
            }px)`,
            left: "min(var(--clipboardMinLeft), var(--clipboardPositionLeft))",
          }}
          pools={pools}
        />
      </div>
    </main>
  );
});

export default Home;