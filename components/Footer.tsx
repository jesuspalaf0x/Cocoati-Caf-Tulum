import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-zinc-950 pt-20 pb-10 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 group">
                            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-slate-900 dark:text-white transition-colors duration-300">
                                <BrandLogo className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-bold brand-text text-slate-900 dark:text-white transition-colors duration-300">
                                COCOATI
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-cream/50 text-sm leading-relaxed italic">
                            "Donde la tradición clásica se encuentra con el ritual contemporáneo del café."
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.tiktok.com/@cocoati.cafe?_r=1&_t=ZS-9402T17qg1x"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-cream/50 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                                <svg className="w-5 h-5 mx-auto" viewBox="0 0 500 500">
                                    <g transform="matrix(1.092326,0,0,1.092326,-2096.625432,-171.58425)">
                                        <path d="M2149.109,158.789L2147.461,158.789C2022.289,158.789 1920.828,260.262 1920.828,385.422C1920.828,510.578 2022.289,612.051 2147.461,612.051L2149.109,612.051C2274.281,612.051 2375.738,510.578 2375.738,385.422C2375.738,260.262 2274.281,158.789 2149.109,158.789" style={{ fill: "transparent" }} />
                                    </g>
                                    <g transform="matrix(1.092326,0,0,1.092326,-2096.625432,-171.58425)">
                                        <path d="M2222.82,308.109L2222.82,332.34C2222.82,332.34 2211.82,331.879 2203.66,329.73C2192.281,326.711 2184.988,322.059 2184.988,322.059C2184.988,322.059 2179.922,318.73 2179.551,318.5L2179.551,382.379C2179.551,385.93 2178.602,394.82 2175.77,402.219C2172.059,411.898 2166.309,418.281 2165.262,419.57C2165.262,419.57 2158.262,428.191 2145.98,433.969C2134.91,439.18 2125.16,439.07 2122.238,439.18C2122.238,439.18 2105.43,439.859 2090.27,429.621L2090.191,429.551C2088.609,427.922 2087.102,426.219 2085.699,424.441C2080.859,418.281 2077.91,411.031 2077.16,408.949L2077.16,408.91C2075.949,405.32 2073.449,396.629 2073.789,388.27C2074.398,373.5 2079.391,364.391 2080.711,362.121C2084.191,355.922 2088.762,350.359 2094.129,345.719C2098.891,341.711 2104.301,338.5 2110.07,336.27C2116.352,333.621 2123.078,332.219 2129.879,332.109L2129.879,356.641C2129.879,356.641 2117.449,352.52 2107.469,359.809C2100.512,365.219 2096.809,370.469 2095.711,379.879C2095.68,386.801 2097.379,396.59 2106.672,403.129C2107.77,403.852 2108.828,404.488 2109.891,405.059C2111.512,407.25 2113.469,409.18 2115.738,410.762C2124.852,416.77 2132.449,417.191 2142.199,413.289C2148.699,410.691 2153.578,404.828 2155.852,398.289C2157.281,394.211 2157.25,390.129 2157.25,385.891L2157.25,265.48L2179.922,265.48C2180.871,271.039 2183.43,278.969 2190.309,286.789C2193.078,289.738 2196.172,292.391 2199.539,294.578C2200.52,295.68 2205.621,300.969 2212.199,304.262C2215.559,305.961 2219.148,307.238 2222.82,308.109" style={{ fill: "rgb(23,23,22)", fillRule: "nonzero" }} />
                                    </g>
                                    <g transform="matrix(1.092326,0,0,1.092326,-2096.625432,-171.58425)">
                                        <path d="M2068.129,401.461L2068.691,403.09C2068.621,402.898 2068.379,402.328 2068.129,401.461" style={{ fill: "rgb(23,23,22)", fillRule: "nonzero" }} />
                                    </g>
                                    <g transform="matrix(1.092326,0,0,1.092326,-2096.625432,-171.58425)">
                                        <path d="M2110.07,336.301C2104.262,338.539 2098.891,341.75 2094.129,345.762C2088.719,350.398 2084.18,356 2080.711,362.191C2079.391,364.461 2074.398,373.531 2073.789,388.352C2073.449,396.738 2075.98,405.398 2077.16,408.98L2077.16,409.02C2077.91,411.059 2080.859,418.359 2085.699,424.52C2087.102,426.301 2088.609,428 2090.191,429.621C2085.051,426.07 2080.52,421.801 2076.629,416.922C2071.828,410.84 2068.879,403.621 2068.129,401.5L2068.129,401.43C2066.91,397.84 2064.379,389.141 2064.762,380.75C2065.359,365.969 2070.352,356.859 2071.68,354.602C2075.148,348.398 2079.691,342.801 2085.102,338.16C2089.852,334.148 2095.262,330.941 2101.039,328.711C2104.68,327.199 2108.449,326.102 2112.309,325.379C2118.129,324.359 2124.059,324.289 2129.922,325.121L2129.922,332.148C2123.078,332.262 2116.352,333.66 2110.07,336.301" style={{ fill: "rgb(23,23,22)", fillRule: "nonzero" }} />
                                    </g>
                                    <g transform="matrix(1.092326,0,0,1.092326,-2096.625432,-171.58425)">
                                        <path d="M2222.82,301.422L2222.82,308.109C2219.148,307.238 2215.559,305.961 2212.199,304.262C2205.66,301.012 2200.559,295.68 2199.539,294.578C2200.711,295.34 2201.879,296.02 2203.121,296.66C2211.141,300.629 2218.969,301.828 2222.82,301.422ZM2179.961,265.48L2157.281,265.48L2157.281,385.891C2157.281,390.129 2157.281,394.211 2155.879,398.289C2153.578,404.789 2148.699,410.691 2142.238,413.289C2132.488,417.23 2124.852,416.77 2115.781,410.762C2113.52,409.211 2111.551,407.289 2109.93,405.09C2117.68,409.211 2124.59,409.141 2133.172,405.699C2139.672,403.09 2144.539,397.191 2146.809,390.691C2148.25,386.609 2148.211,382.531 2148.211,378.301L2148.211,257.879L2179.551,257.879C2179.5,257.879 2179.16,260.859 2179.961,265.48" style={{ fill: "rgb(23,23,22)", fillRule: "nonzero" }} />
                                    </g>
                                    <g transform="matrix(1.092326,0,0,1.092326,-2096.625432,-171.58425)">
                                        <path d="M2199.84,493.762L2199.84,493.828C2199.84,494.711 2199.719,495.539 2199.461,496.371C2199.719,495.539 2199.84,494.672 2199.84,493.762ZM2181.129,496.371C2180.871,495.539 2180.75,494.711 2180.75,493.828L2180.75,493.762C2180.75,494.672 2180.871,495.539 2181.129,496.371" style={{ fill: "rgb(23,23,22)", fillRule: "nonzero" }} />
                                    </g>
                                    <g transform="matrix(1.092326,0,0,1.092326,-2096.625432,-171.58425)">
                                        <path d="M2199.84,493.691C2199.84,488.391 2195.57,484.121 2190.281,484.121C2184.988,484.121 2180.711,488.391 2180.711,493.691C2180.711,498.98 2184.988,503.238 2190.281,503.238C2195.57,503.238 2199.84,498.98 2199.84,493.691ZM2209.77,493.691C2209.77,504.309 2201.051,512.922 2190.281,512.922C2179.5,512.922 2170.77,504.309 2170.77,493.691C2170.77,483.059 2179.5,474.441 2190.281,474.441C2201.051,474.441 2209.77,483.059 2209.77,493.691ZM2238.539,490.211L2252.23,476.531L2239.148,476.531L2227.879,487.789L2227.879,465.719L2216.77,465.719L2216.691,512.73L2227.922,512.73L2227.922,500.488L2231.441,497.309L2242.32,512.73L2254.301,512.73L2238.539,490.211ZM2131.281,476.531L2118.199,476.531L2106.941,487.789L2106.941,465.719L2095.828,465.719L2095.789,512.691L2107.02,512.691L2107.02,500.449L2110.488,497.27L2121.379,512.691L2133.359,512.691L2117.602,490.172L2131.281,476.531ZM2079.879,512.73L2091.07,512.73L2091.07,480.68L2079.879,480.68L2079.879,512.73ZM2085.398,476.789C2088.461,476.789 2090.922,474.328 2090.922,471.27C2090.922,468.211 2088.461,465.75 2085.398,465.75C2082.328,465.75 2079.879,468.211 2079.879,471.27C2079.879,474.328 2082.328,476.789 2085.398,476.789ZM2136.148,465.719L2136.148,475.469L2147.641,475.469L2147.641,512.77L2159.059,512.77L2159.059,475.469L2168.32,475.469L2171.609,465.719L2136.148,465.719ZM2042.27,465.719L2077.691,465.719L2074.398,475.469L2065.141,475.469L2065.141,512.77L2053.762,512.77L2053.762,475.469L2042.27,475.469L2042.27,465.719" style={{ fill: "rgb(23,23,22)", fillRule: "nonzero" }} />
                                    </g>
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/cocoati.cafe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-cream/50 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                                <svg className="w-5 h-5 mx-auto" viewBox="0 0 500 500">
                                    <g transform="matrix(1.092324,0,0,1.092324,-1442.401725,-170.583333)">
                                        <path d="M1550.191,158.789L1548.531,158.789C1423.371,158.789 1321.898,260.262 1321.898,385.422C1321.898,510.578 1423.371,612.051 1548.531,612.051L1550.191,612.051C1675.352,612.051 1776.82,510.578 1776.82,385.422C1776.82,260.262 1675.352,158.789 1550.191,158.789" style={{ fill: "transparent" }} />
                                    </g>
                                    <g transform="matrix(1.092324,0,0,1.092324,-1442.401725,-170.583333)">
                                        <clipPath id="_clip1">
                                            <path d="M1478.59,282.398C1461.078,282.398 1446.828,296.039 1446.828,312.828L1446.828,458.012C1446.828,474.801 1461.078,488.461 1478.59,488.461L1620.121,488.461C1637.609,488.461 1651.879,474.801 1651.879,458.012L1651.879,312.828C1651.879,296.039 1637.609,282.398 1620.121,282.398L1478.59,282.398ZM1620.121,509.77L1478.59,509.77C1449.281,509.77 1425.449,486.559 1425.449,458.012L1425.449,312.828C1425.449,284.289 1449.281,261.07 1478.59,261.07L1620.121,261.07C1649.43,261.07 1673.27,284.289 1673.27,312.828L1673.27,458.012C1673.27,486.559 1649.43,509.77 1620.121,509.77" />
                                        </clipPath>
                                        <g clipPath="url(#_clip1)">
                                            <g>
                                                <clipPath id="_clip2">
                                                    <path d="M1478.59,282.398C1461.078,282.398 1446.828,296.039 1446.828,312.828L1446.828,458.012C1446.828,474.801 1461.078,488.461 1478.59,488.461L1620.121,488.461C1637.609,488.461 1651.879,474.801 1651.879,458.012L1651.879,312.828C1651.879,296.039 1637.609,282.398 1620.121,282.398L1478.59,282.398ZM1620.121,509.77L1478.59,509.77C1449.281,509.77 1425.449,486.559 1425.449,458.012L1425.449,312.828C1425.449,284.289 1449.281,261.07 1478.59,261.07L1620.121,261.07C1649.43,261.07 1673.27,284.289 1673.27,312.828L1673.27,458.012C1673.27,486.559 1649.43,509.77 1620.121,509.77" />
                                                </clipPath>
                                                <g clipPath="url(#_clip2)">
                                                    <path d="M1556.277,137.352L1301.293,378.48L1542.445,633.488L1797.426,392.359L1556.277,137.352Z" style={{ fill: "currentColor" }} />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g transform="matrix(1.092324,0,0,1.092324,-1442.401725,-170.583333)">
                                        <clipPath id="_clip4">
                                            <path d="M1549.352,342.191C1525.43,342.191 1505.969,361.59 1505.969,385.43C1505.969,409.25 1525.43,428.641 1549.352,428.641C1573.289,428.641 1592.75,409.25 1592.75,385.43C1592.75,361.59 1573.289,342.191 1549.352,342.191ZM1549.352,449.969C1513.641,449.969 1484.57,421.012 1484.57,385.43C1484.57,349.82 1513.641,320.879 1549.352,320.879C1585.07,320.879 1614.148,349.82 1614.148,385.43C1614.148,421.012 1585.07,449.969 1549.352,449.969" />
                                        </clipPath>
                                        <g clipPath="url(#_clip4)">
                                            <g>
                                                <clipPath id="_clip5">
                                                    <path d="M1549.352,342.191C1525.43,342.191 1505.969,361.59 1505.969,385.43C1505.969,409.25 1525.43,428.641 1549.352,428.641C1573.289,428.641 1592.75,409.25 1592.75,385.43C1592.75,361.59 1573.289,342.191 1549.352,342.191ZM1549.352,449.969C1513.641,449.969 1484.57,421.012 1484.57,385.43C1484.57,349.82 1513.641,320.879 1549.352,320.879C1585.07,320.879 1614.148,349.82 1614.148,385.43C1614.148,421.012 1585.07,449.969 1549.352,449.969" />
                                                </clipPath>
                                                <g clipPath="url(#_clip5)">
                                                    <path d="M1552.977,256.191L1420.125,381.82L1545.742,514.66L1678.594,389.027L1552.977,256.191Z" style={{ fill: "currentColor" }} />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g transform="matrix(1.092324,0,0,1.092324,-1442.401725,-170.583333)">
                                        <clipPath id="_clip7">
                                            <path d="M1634.039,317.629C1634.039,325.961 1627.262,332.719 1618.891,332.719C1610.512,332.719 1603.73,325.961 1603.73,317.629C1603.73,309.289 1610.512,302.531 1618.891,302.531C1627.262,302.531 1634.039,309.289 1634.039,317.629" />
                                        </clipPath>
                                        <g clipPath="url(#_clip7)">
                                            <g>
                                                <clipPath id="_clip8">
                                                    <path d="M1634.039,317.629C1634.039,325.961 1627.262,332.719 1618.891,332.719C1610.512,332.719 1603.73,325.961 1603.73,317.629C1603.73,309.289 1610.512,302.531 1618.891,302.531C1627.262,302.531 1634.039,309.289 1634.039,317.629" />
                                                </clipPath>
                                                <g clipPath="url(#_clip8)">
                                                    <path d="M1619.73,287.398L1588.66,316.781L1618.039,347.852L1649.113,318.469L1619.73,287.398Z" style={{ fill: "currentColor" }} />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <defs>
                                        <linearGradient id="_Linear3" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(241.149517,255.007755,-255.007755,241.149517,1428.781441,257.919596)"><stop offset="0" style={{ stopColor: "rgb(245,131,68)", stopOpacity: "1" }} /><stop offset="0.01" style={{ stopColor: "rgb(245,127,67)", stopOpacity: "1" }} /><stop offset="0.02" style={{ stopColor: "rgb(244,121,67)", stopOpacity: "1" }} /><stop offset="0.02" style={{ stopColor: "rgb(244,120,66)", stopOpacity: "1" }} /><stop offset="0.03" style={{ stopColor: "rgb(244,118,67)", stopOpacity: "1" }} /><stop offset="0.05" style={{ stopColor: "rgb(243,109,67)", stopOpacity: "1" }} /><stop offset="0.05" style={{ stopColor: "rgb(243,107,68)", stopOpacity: "1" }} /><stop offset="0.06" style={{ stopColor: "rgb(243,102,68)", stopOpacity: "1" }} /><stop offset="0.07" style={{ stopColor: "rgb(243,99,68)", stopOpacity: "1" }} /><stop offset="0.07" style={{ stopColor: "rgb(243,97,69)", stopOpacity: "1" }} /><stop offset="0.08" style={{ stopColor: "rgb(242,96,69)", stopOpacity: "1" }} /><stop offset="0.09" style={{ stopColor: "rgb(242,90,69)", stopOpacity: "1" }} /><stop offset="0.11" style={{ stopColor: "rgb(241,84,68)", stopOpacity: "1" }} /><stop offset="0.11" style={{ stopColor: "rgb(241,80,68)", stopOpacity: "1" }} /><stop offset="0.12" style={{ stopColor: "rgb(241,79,69)", stopOpacity: "1" }} /><stop offset="0.13" style={{ stopColor: "rgb(241,75,69)", stopOpacity: "1" }} /><stop offset="0.13" style={{ stopColor: "rgb(241,72,69)", stopOpacity: "1" }} /><stop offset="0.14" style={{ stopColor: "rgb(240,71,69)", stopOpacity: "1" }} /><stop offset="0.14" style={{ stopColor: "rgb(240,69,70)", stopOpacity: "1" }} /><stop offset="0.16" style={{ stopColor: "rgb(240,63,70)", stopOpacity: "1" }} /><stop offset="0.16" style={{ stopColor: "rgb(240,60,70)", stopOpacity: "1" }} /><stop offset="0.17" style={{ stopColor: "rgb(239,59,70)", stopOpacity: "1" }} /><stop offset="0.18" style={{ stopColor: "rgb(239,57,70)", stopOpacity: "1" }} /><stop offset="0.18" style={{ stopColor: "rgb(239,53,70)", stopOpacity: "1" }} /><stop offset="0.19" style={{ stopColor: "rgb(239,50,70)", stopOpacity: "1" }} /><stop offset="0.2" style={{ stopColor: "rgb(238,47,71)", stopOpacity: "1" }} /><stop offset="0.21" style={{ stopColor: "rgb(238,46,70)", stopOpacity: "1" }} /><stop offset="0.21" style={{ stopColor: "rgb(238,44,70)", stopOpacity: "1" }} /><stop offset="0.22" style={{ stopColor: "rgb(238,40,71)", stopOpacity: "1" }} /><stop offset="0.24" style={{ stopColor: "rgb(237,35,71)", stopOpacity: "1" }} /><stop offset="0.25" style={{ stopColor: "rgb(236,35,72)", stopOpacity: "1" }} /><stop offset="0.25" style={{ stopColor: "rgb(235,35,74)", stopOpacity: "1" }} /><stop offset="0.25" style={{ stopColor: "rgb(235,35,74)", stopOpacity: "1" }} /><stop offset="0.26" style={{ stopColor: "rgb(234,34,75)", stopOpacity: "1" }} /><stop offset="0.26" style={{ stopColor: "rgb(233,35,75)", stopOpacity: "1" }} /><stop offset="0.28" style={{ stopColor: "rgb(228,34,80)", stopOpacity: "1" }} /><stop offset="0.29" style={{ stopColor: "rgb(227,35,80)", stopOpacity: "1" }} /><stop offset="0.3" style={{ stopColor: "rgb(223,35,83)", stopOpacity: "1" }} /><stop offset="0.3" style={{ stopColor: "rgb(223,35,84)", stopOpacity: "1" }} /><stop offset="0.31" style={{ stopColor: "rgb(220,34,87)", stopOpacity: "1" }} /><stop offset="0.33" style={{ stopColor: "rgb(217,34,91)", stopOpacity: "1" }} /><stop offset="0.34" style={{ stopColor: "rgb(212,35,94)", stopOpacity: "1" }} /><stop offset="0.36" style={{ stopColor: "rgb(209,36,97)", stopOpacity: "1" }} /><stop offset="0.37" style={{ stopColor: "rgb(207,35,100)", stopOpacity: "1" }} /><stop offset="0.39" style={{ stopColor: "rgb(201,35,107)", stopOpacity: "1" }} /><stop offset="0.4" style={{ stopColor: "rgb(200,36,108)", stopOpacity: "1" }} /><stop offset="0.41" style={{ stopColor: "rgb(198,36,109)", stopOpacity: "1" }} /><stop offset="0.41" style={{ stopColor: "rgb(197,36,110)", stopOpacity: "1" }} /><stop offset="0.41" style={{ stopColor: "rgb(196,37,111)", stopOpacity: "1" }} /><stop offset="0.43" style={{ stopColor: "rgb(193,37,114)", stopOpacity: "1" }} /><stop offset="0.44" style={{ stopColor: "rgb(190,38,117)", stopOpacity: "1" }} /><stop offset="0.45" style={{ stopColor: "rgb(186,38,122)", stopOpacity: "1" }} /><stop offset="0.46" style={{ stopColor: "rgb(185,39,123)", stopOpacity: "1" }} /><stop offset="0.46" style={{ stopColor: "rgb(185,39,125)", stopOpacity: "1" }} /><stop offset="0.46" style={{ stopColor: "rgb(184,39,126)", stopOpacity: "1" }} /><stop offset="0.48" style={{ stopColor: "rgb(180,40,129)", stopOpacity: "1" }} /><stop offset="0.48" style={{ stopColor: "rgb(180,41,131)", stopOpacity: "1" }} /><stop offset="0.48" style={{ stopColor: "rgb(179,41,132)", stopOpacity: "1" }} /><stop offset="0.5" style={{ stopColor: "rgb(176,42,135)", stopOpacity: "1" }} /><stop offset="0.5" style={{ stopColor: "rgb(175,43,137)", stopOpacity: "1" }} /><stop offset="0.51" style={{ stopColor: "rgb(174,43,139)", stopOpacity: "1" }} /><stop offset="0.51" style={{ stopColor: "rgb(173,44,140)", stopOpacity: "1" }} /><stop offset="0.52" style={{ stopColor: "rgb(172,44,141)", stopOpacity: "1" }} /><stop offset="0.52" style={{ stopColor: "rgb(170,45,143)", stopOpacity: "1" }} /><stop offset="0.53" style={{ stopColor: "rgb(170,45,144)", stopOpacity: "1" }} /><stop offset="0.53" style={{ stopColor: "rgb(169,45,146)", stopOpacity: "1" }} /><stop offset="0.55" style={{ stopColor: "rgb(164,47,152)", stopOpacity: "1" }} /><stop offset="0.55" style={{ stopColor: "rgb(163,48,153)", stopOpacity: "1" }} /><stop offset="0.56" style={{ stopColor: "rgb(163,47,154)", stopOpacity: "1" }} /><stop offset="0.56" style={{ stopColor: "rgb(162,47,156)", stopOpacity: "1" }} /><stop offset="0.57" style={{ stopColor: "rgb(161,48,157)", stopOpacity: "1" }} /><stop offset="0.57" style={{ stopColor: "rgb(161,48,157)", stopOpacity: "1" }} /><stop offset="0.58" style={{ stopColor: "rgb(159,48,157)", stopOpacity: "1" }} /><stop offset="0.59" style={{ stopColor: "rgb(155,49,158)", stopOpacity: "1" }} /><stop offset="0.6" style={{ stopColor: "rgb(152,51,158)", stopOpacity: "1" }} /><stop offset="0.61" style={{ stopColor: "rgb(151,52,158)", stopOpacity: "1" }} /><stop offset="0.61" style={{ stopColor: "rgb(150,52,159)", stopOpacity: "1" }} /><stop offset="0.63" style={{ stopColor: "rgb(145,54,159)", stopOpacity: "1" }} /><stop offset="0.63" style={{ stopColor: "rgb(144,54,160)", stopOpacity: "1" }} /><stop offset="0.64" style={{ stopColor: "rgb(143,55,160)", stopOpacity: "1" }} /><stop offset="0.64" style={{ stopColor: "rgb(141,55,160)", stopOpacity: "1" }} /><stop offset="0.65" style={{ stopColor: "rgb(140,56,160)", stopOpacity: "1" }} /><stop offset="0.65" style={{ stopColor: "rgb(139,56,160)", stopOpacity: "1" }} /><stop offset="0.66" style={{ stopColor: "rgb(138,57,160)", stopOpacity: "1" }} /><stop offset="0.66" style={{ stopColor: "rgb(137,57,161)", stopOpacity: "1" }} /><stop offset="0.66" style={{ stopColor: "rgb(137,57,161)", stopOpacity: "1" }} /><stop offset="0.67" style={{ stopColor: "rgb(136,58,161)", stopOpacity: "1" }} /><stop offset="0.68" style={{ stopColor: "rgb(134,58,161)", stopOpacity: "1" }} /><stop offset="0.68" style={{ stopColor: "rgb(133,59,161)", stopOpacity: "1" }} /><stop offset="0.68" style={{ stopColor: "rgb(132,59,161)", stopOpacity: "1" }} /><stop offset="0.69" style={{ stopColor: "rgb(131,59,162)", stopOpacity: "1" }} /><stop offset="0.7" style={{ stopColor: "rgb(128,60,162)", stopOpacity: "1" }} /><stop offset="0.7" style={{ stopColor: "rgb(128,60,162)", stopOpacity: "1" }} /><stop offset="0.71" style={{ stopColor: "rgb(126,61,162)", stopOpacity: "1" }} /><stop offset="0.71" style={{ stopColor: "rgb(125,62,162)", stopOpacity: "1" }} /><stop offset="0.72" style={{ stopColor: "rgb(125,62,163)", stopOpacity: "1" }} /><stop offset="0.73" style={{ stopColor: "rgb(122,63,163)", stopOpacity: "1" }} /><stop offset="0.73" style={{ stopColor: "rgb(121,64,163)", stopOpacity: "1" }} /><stop offset="0.73" style={{ stopColor: "rgb(120,64,164)", stopOpacity: "1" }} /><stop offset="0.75" style={{ stopColor: "rgb(118,65,164)", stopOpacity: "1" }} /><stop offset="0.75" style={{ stopColor: "rgb(117,66,164)", stopOpacity: "1" }} /><stop offset="0.76" style={{ stopColor: "rgb(115,66,165)", stopOpacity: "1" }} /><stop offset="0.76" style={{ stopColor: "rgb(114,67,165)", stopOpacity: "1" }} /><stop offset="0.77" style={{ stopColor: "rgb(114,67,165)", stopOpacity: "1" }} /><stop offset="0.78" style={{ stopColor: "rgb(111,68,166)", stopOpacity: "1" }} /><stop offset="0.81" style={{ stopColor: "rgb(104,72,167)", stopOpacity: "1" }} /><stop offset="0.81" style={{ stopColor: "rgb(104,72,167)", stopOpacity: "1" }} /><stop offset="0.82" style={{ stopColor: "rgb(103,72,168)", stopOpacity: "1" }} /><stop offset="0.83" style={{ stopColor: "rgb(100,73,168)", stopOpacity: "1" }} /><stop offset="0.83" style={{ stopColor: "rgb(100,74,168)", stopOpacity: "1" }} /><stop offset="0.85" style={{ stopColor: "rgb(96,75,169)", stopOpacity: "1" }} /><stop offset="0.86" style={{ stopColor: "rgb(94,76,169)", stopOpacity: "1" }} /><stop offset="0.86" style={{ stopColor: "rgb(93,77,170)", stopOpacity: "1" }} /><stop offset="0.87" style={{ stopColor: "rgb(93,78,170)", stopOpacity: "1" }} /><stop offset="0.87" style={{ stopColor: "rgb(92,78,170)", stopOpacity: "1" }} /><stop offset="0.88" style={{ stopColor: "rgb(91,78,171)", stopOpacity: "1" }} /><stop offset="0.89" style={{ stopColor: "rgb(88,80,171)", stopOpacity: "1" }} /><stop offset="0.9" style={{ stopColor: "rgb(86,80,172)", stopOpacity: "1" }} /><stop offset="0.91" style={{ stopColor: "rgb(85,81,172)", stopOpacity: "1" }} /><stop offset="0.92" style={{ stopColor: "rgb(82,82,173)", stopOpacity: "1" }} /><stop offset="0.93" style={{ stopColor: "rgb(82,83,173)", stopOpacity: "1" }} /><stop offset="1" style={{ stopColor: "rgb(81,83,173)", stopOpacity: "1" }} /></linearGradient>
                                        <linearGradient id="_Linear6" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(125.61765,132.837079,-132.837079,125.61765,1486.549738,319.008014)"><stop offset="0" style={{ stopColor: "rgb(238,35,71)", stopOpacity: "1" }} /><stop offset="0" style={{ stopColor: "rgb(237,35,71)", stopOpacity: "1" }} /><stop offset="0.02" style={{ stopColor: "rgb(236,35,73)", stopOpacity: "1" }} /><stop offset="0.02" style={{ stopColor: "rgb(236,35,73)", stopOpacity: "1" }} /><stop offset="0.02" style={{ stopColor: "rgb(235,35,74)", stopOpacity: "1" }} /><stop offset="0.03" style={{ stopColor: "rgb(235,35,74)", stopOpacity: "1" }} /><stop offset="0.03" style={{ stopColor: "rgb(234,35,75)", stopOpacity: "1" }} /><stop offset="0.04" style={{ stopColor: "rgb(234,34,75)", stopOpacity: "1" }} /><stop offset="0.05" style={{ stopColor: "rgb(232,34,76)", stopOpacity: "1" }} /><stop offset="0.05" style={{ stopColor: "rgb(232,34,76)", stopOpacity: "1" }} /><stop offset="0.05" style={{ stopColor: "rgb(231,35,77)", stopOpacity: "1" }} /><stop offset="0.06" style={{ stopColor: "rgb(230,35,77)", stopOpacity: "1" }} /><stop offset="0.07" style={{ stopColor: "rgb(229,34,79)", stopOpacity: "1" }} /><stop offset="0.07" style={{ stopColor: "rgb(229,34,79)", stopOpacity: "1" }} /><stop offset="0.08" style={{ stopColor: "rgb(228,34,80)", stopOpacity: "1" }} /><stop offset="0.08" style={{ stopColor: "rgb(227,35,80)", stopOpacity: "1" }} /><stop offset="0.09" style={{ stopColor: "rgb(227,35,80)", stopOpacity: "1" }} /><stop offset="0.09" style={{ stopColor: "rgb(225,35,81)", stopOpacity: "1" }} /><stop offset="0.1" style={{ stopColor: "rgb(225,35,82)", stopOpacity: "1" }} /><stop offset="0.1" style={{ stopColor: "rgb(225,35,82)", stopOpacity: "1" }} /><stop offset="0.11" style={{ stopColor: "rgb(224,35,83)", stopOpacity: "1" }} /><stop offset="0.11" style={{ stopColor: "rgb(224,35,83)", stopOpacity: "1" }} /><stop offset="0.11" style={{ stopColor: "rgb(223,35,84)", stopOpacity: "1" }} /><stop offset="0.12" style={{ stopColor: "rgb(223,35,84)", stopOpacity: "1" }} /><stop offset="0.12" style={{ stopColor: "rgb(222,35,85)", stopOpacity: "1" }} /><stop offset="0.13" style={{ stopColor: "rgb(222,35,85)", stopOpacity: "1" }} /><stop offset="0.14" style={{ stopColor: "rgb(220,34,87)", stopOpacity: "1" }} /><stop offset="0.14" style={{ stopColor: "rgb(220,34,88)", stopOpacity: "1" }} /><stop offset="0.15" style={{ stopColor: "rgb(219,34,88)", stopOpacity: "1" }} /><stop offset="0.16" style={{ stopColor: "rgb(218,34,89)", stopOpacity: "1" }} /><stop offset="0.17" style={{ stopColor: "rgb(217,34,91)", stopOpacity: "1" }} /><stop offset="0.17" style={{ stopColor: "rgb(216,34,91)", stopOpacity: "1" }} /><stop offset="0.18" style={{ stopColor: "rgb(216,35,92)", stopOpacity: "1" }} /><stop offset="0.18" style={{ stopColor: "rgb(214,35,93)", stopOpacity: "1" }} /><stop offset="0.19" style={{ stopColor: "rgb(214,35,93)", stopOpacity: "1" }} /><stop offset="0.2" style={{ stopColor: "rgb(212,36,94)", stopOpacity: "1" }} /><stop offset="0.21" style={{ stopColor: "rgb(211,36,95)", stopOpacity: "1" }} /><stop offset="0.21" style={{ stopColor: "rgb(211,36,96)", stopOpacity: "1" }} /><stop offset="0.21" style={{ stopColor: "rgb(210,36,96)", stopOpacity: "1" }} /><stop offset="0.22" style={{ stopColor: "rgb(210,36,98)", stopOpacity: "1" }} /><stop offset="0.23" style={{ stopColor: "rgb(209,36,98)", stopOpacity: "1" }} /><stop offset="0.23" style={{ stopColor: "rgb(209,36,98)", stopOpacity: "1" }} /><stop offset="0.23" style={{ stopColor: "rgb(208,35,99)", stopOpacity: "1" }} /><stop offset="0.24" style={{ stopColor: "rgb(208,35,99)", stopOpacity: "1" }} /><stop offset="0.24" style={{ stopColor: "rgb(208,35,100)", stopOpacity: "1" }} /><stop offset="0.25" style={{ stopColor: "rgb(207,35,100)", stopOpacity: "1" }} /><stop offset="0.26" style={{ stopColor: "rgb(206,35,102)", stopOpacity: "1" }} /><stop offset="0.26" style={{ stopColor: "rgb(206,35,103)", stopOpacity: "1" }} /><stop offset="0.27" style={{ stopColor: "rgb(204,35,104)", stopOpacity: "1" }} /><stop offset="0.28" style={{ stopColor: "rgb(203,35,104)", stopOpacity: "1" }} /><stop offset="0.29" style={{ stopColor: "rgb(202,35,105)", stopOpacity: "1" }} /><stop offset="0.29" style={{ stopColor: "rgb(202,35,106)", stopOpacity: "1" }} /><stop offset="0.29" style={{ stopColor: "rgb(201,35,106)", stopOpacity: "1" }} /><stop offset="0.3" style={{ stopColor: "rgb(200,35,107)", stopOpacity: "1" }} /><stop offset="0.3" style={{ stopColor: "rgb(200,36,108)", stopOpacity: "1" }} /><stop offset="0.31" style={{ stopColor: "rgb(198,36,108)", stopOpacity: "1" }} /><stop offset="0.32" style={{ stopColor: "rgb(198,36,109)", stopOpacity: "1" }} /><stop offset="0.32" style={{ stopColor: "rgb(197,36,109)", stopOpacity: "1" }} /><stop offset="0.32" style={{ stopColor: "rgb(197,36,110)", stopOpacity: "1" }} /><stop offset="0.33" style={{ stopColor: "rgb(197,37,110)", stopOpacity: "1" }} /><stop offset="0.34" style={{ stopColor: "rgb(196,37,112)", stopOpacity: "1" }} /><stop offset="0.34" style={{ stopColor: "rgb(195,37,112)", stopOpacity: "1" }} /><stop offset="0.35" style={{ stopColor: "rgb(193,37,114)", stopOpacity: "1" }} /><stop offset="0.36" style={{ stopColor: "rgb(193,37,114)", stopOpacity: "1" }} /><stop offset="0.37" style={{ stopColor: "rgb(191,37,115)", stopOpacity: "1" }} /><stop offset="0.37" style={{ stopColor: "rgb(191,37,116)", stopOpacity: "1" }} /><stop offset="0.38" style={{ stopColor: "rgb(190,38,117)", stopOpacity: "1" }} /><stop offset="0.38" style={{ stopColor: "rgb(190,38,117)", stopOpacity: "1" }} /><stop offset="0.38" style={{ stopColor: "rgb(189,38,118)", stopOpacity: "1" }} /><stop offset="0.39" style={{ stopColor: "rgb(189,38,118)", stopOpacity: "1" }} /><stop offset="0.4" style={{ stopColor: "rgb(187,38,121)", stopOpacity: "1" }} /><stop offset="0.41" style={{ stopColor: "rgb(187,38,121)", stopOpacity: "1" }} /><stop offset="0.41" style={{ stopColor: "rgb(186,38,122)", stopOpacity: "1" }} /><stop offset="0.41" style={{ stopColor: "rgb(186,38,123)", stopOpacity: "1" }} /><stop offset="0.42" style={{ stopColor: "rgb(185,39,123)", stopOpacity: "1" }} /><stop offset="0.43" style={{ stopColor: "rgb(184,39,125)", stopOpacity: "1" }} /><stop offset="0.44" style={{ stopColor: "rgb(184,39,127)", stopOpacity: "1" }} /><stop offset="0.45" style={{ stopColor: "rgb(181,40,129)", stopOpacity: "1" }} /><stop offset="0.45" style={{ stopColor: "rgb(181,40,129)", stopOpacity: "1" }} /><stop offset="0.47" style={{ stopColor: "rgb(179,41,132)", stopOpacity: "1" }} /><stop offset="0.47" style={{ stopColor: "rgb(179,41,132)", stopOpacity: "1" }} /><stop offset="0.48" style={{ stopColor: "rgb(178,42,133)", stopOpacity: "1" }} /><stop offset="0.48" style={{ stopColor: "rgb(178,42,133)", stopOpacity: "1" }} /><stop offset="0.48" style={{ stopColor: "rgb(177,42,134)", stopOpacity: "1" }} /><stop offset="0.49" style={{ stopColor: "rgb(177,42,134)", stopOpacity: "1" }} /><stop offset="0.49" style={{ stopColor: "rgb(176,42,135)", stopOpacity: "1" }} /><stop offset="0.5" style={{ stopColor: "rgb(176,42,135)", stopOpacity: "1" }} /><stop offset="0.5" style={{ stopColor: "rgb(175,43,137)", stopOpacity: "1" }} /><stop offset="0.51" style={{ stopColor: "rgb(175,43,137)", stopOpacity: "1" }} /><stop offset="0.52" style={{ stopColor: "rgb(173,43,139)", stopOpacity: "1" }} /><stop offset="0.52" style={{ stopColor: "rgb(173,44,139)", stopOpacity: "1" }} /><stop offset="0.53" style={{ stopColor: "rgb(172,44,140)", stopOpacity: "1" }} /><stop offset="0.53" style={{ stopColor: "rgb(172,44,141)", stopOpacity: "1" }} /><stop offset="0.54" style={{ stopColor: "rgb(172,45,141)", stopOpacity: "1" }} /><stop offset="0.54" style={{ stopColor: "rgb(171,45,143)", stopOpacity: "1" }} /><stop offset="0.55" style={{ stopColor: "rgb(170,45,143)", stopOpacity: "1" }} /><stop offset="0.56" style={{ stopColor: "rgb(168,46,146)", stopOpacity: "1" }} /><stop offset="0.57" style={{ stopColor: "rgb(168,46,147)", stopOpacity: "1" }} /><stop offset="0.57" style={{ stopColor: "rgb(167,46,147)", stopOpacity: "1" }} /><stop offset="0.58" style={{ stopColor: "rgb(166,46,149)", stopOpacity: "1" }} /><stop offset="0.58" style={{ stopColor: "rgb(166,46,150)", stopOpacity: "1" }} /><stop offset="0.59" style={{ stopColor: "rgb(166,47,150)", stopOpacity: "1" }} /><stop offset="0.59" style={{ stopColor: "rgb(165,47,151)", stopOpacity: "1" }} /><stop offset="0.59" style={{ stopColor: "rgb(165,47,151)", stopOpacity: "1" }} /><stop offset="0.6" style={{ stopColor: "rgb(164,47,152)", stopOpacity: "1" }} /><stop offset="0.6" style={{ stopColor: "rgb(164,47,152)", stopOpacity: "1" }} /><stop offset="0.61" style={{ stopColor: "rgb(163,47,153)", stopOpacity: "1" }} /><stop offset="0.62" style={{ stopColor: "rgb(162,47,155)", stopOpacity: "1" }} /><stop offset="0.63" style={{ stopColor: "rgb(162,47,157)", stopOpacity: "1" }} /><stop offset="0.63" style={{ stopColor: "rgb(161,48,157)", stopOpacity: "1" }} /><stop offset="0.64" style={{ stopColor: "rgb(159,48,157)", stopOpacity: "1" }} /><stop offset="0.65" style={{ stopColor: "rgb(159,48,157)", stopOpacity: "1" }} /><stop offset="0.65" style={{ stopColor: "rgb(158,49,157)", stopOpacity: "1" }} /><stop offset="0.67" style={{ stopColor: "rgb(156,49,157)", stopOpacity: "1" }} /><stop offset="0.67" style={{ stopColor: "rgb(155,49,158)", stopOpacity: "1" }} /><stop offset="0.68" style={{ stopColor: "rgb(155,50,158)", stopOpacity: "1" }} /><stop offset="0.68" style={{ stopColor: "rgb(154,50,158)", stopOpacity: "1" }} /><stop offset="0.68" style={{ stopColor: "rgb(154,50,158)", stopOpacity: "1" }} /><stop offset="0.69" style={{ stopColor: "rgb(153,51,158)", stopOpacity: "1" }} /><stop offset="0.7" style={{ stopColor: "rgb(151,51,158)", stopOpacity: "1" }} /><stop offset="0.7" style={{ stopColor: "rgb(151,51,158)", stopOpacity: "1" }} /><stop offset="0.71" style={{ stopColor: "rgb(149,52,159)", stopOpacity: "1" }} /><stop offset="0.73" style={{ stopColor: "rgb(146,53,159)", stopOpacity: "1" }} /><stop offset="0.74" style={{ stopColor: "rgb(145,54,159)", stopOpacity: "1" }} /><stop offset="0.75" style={{ stopColor: "rgb(145,54,160)", stopOpacity: "1" }} /><stop offset="0.77" style={{ stopColor: "rgb(141,55,160)", stopOpacity: "1" }} /><stop offset="0.78" style={{ stopColor: "rgb(141,55,160)", stopOpacity: "1" }} /><stop offset="0.78" style={{ stopColor: "rgb(140,56,160)", stopOpacity: "1" }} /><stop offset="0.82" style={{ stopColor: "rgb(136,57,161)", stopOpacity: "1" }} /><stop offset="0.82" style={{ stopColor: "rgb(136,58,161)", stopOpacity: "1" }} /><stop offset="0.83" style={{ stopColor: "rgb(134,58,161)", stopOpacity: "1" }} /><stop offset="0.84" style={{ stopColor: "rgb(134,58,161)", stopOpacity: "1" }} /><stop offset="0.84" style={{ stopColor: "rgb(133,59,161)", stopOpacity: "1" }} /><stop offset="0.86" style={{ stopColor: "rgb(132,59,161)", stopOpacity: "1" }} /><stop offset="0.86" style={{ stopColor: "rgb(131,59,162)", stopOpacity: "1" }} /><stop offset="0.86" style={{ stopColor: "rgb(131,60,162)", stopOpacity: "1" }} /><stop offset="0.87" style={{ stopColor: "rgb(130,60,162)", stopOpacity: "1" }} /><stop offset="0.89" style={{ stopColor: "rgb(127,60,162)", stopOpacity: "1" }} /><stop offset="0.89" style={{ stopColor: "rgb(127,61,162)", stopOpacity: "1" }} /><stop offset="0.92" style={{ stopColor: "rgb(125,62,163)", stopOpacity: "1" }} /><stop offset="0.93" style={{ stopColor: "rgb(124,62,163)", stopOpacity: "1" }} /><stop offset="0.94" style={{ stopColor: "rgb(122,63,163)", stopOpacity: "1" }} /><stop offset="0.94" style={{ stopColor: "rgb(121,64,163)", stopOpacity: "1" }} /><stop offset="0.95" style={{ stopColor: "rgb(121,64,164)", stopOpacity: "1" }} /><stop offset="0.95" style={{ stopColor: "rgb(120,64,164)", stopOpacity: "1" }} /><stop offset="0.95" style={{ stopColor: "rgb(120,65,164)", stopOpacity: "1" }} /><stop offset="0.97" style={{ stopColor: "rgb(118,65,164)", stopOpacity: "1" }} /><stop offset="0.97" style={{ stopColor: "rgb(118,65,164)", stopOpacity: "1" }} /><stop offset="0.99" style={{ stopColor: "rgb(115,66,165)", stopOpacity: "1" }} /><stop offset="1" style={{ stopColor: "rgb(115,67,165)", stopOpacity: "1" }} /></linearGradient>
                                        <linearGradient id="_Linear9" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(29.38055,31.069099,-31.069099,29.38055,1604.195199,302.090148)"><stop offset="0" style={{ stopColor: "rgb(190,38,117)", stopOpacity: "1" }} /><stop offset="0.02" style={{ stopColor: "rgb(190,38,117)", stopOpacity: "1" }} /><stop offset="0.09" style={{ stopColor: "rgb(188,38,119)", stopOpacity: "1" }} /><stop offset="0.09" style={{ stopColor: "rgb(188,38,120)", stopOpacity: "1" }} /><stop offset="0.1" style={{ stopColor: "rgb(188,38,120)", stopOpacity: "1" }} /><stop offset="0.11" style={{ stopColor: "rgb(187,38,120)", stopOpacity: "1" }} /><stop offset="0.12" style={{ stopColor: "rgb(187,38,120)", stopOpacity: "1" }} /><stop offset="0.15" style={{ stopColor: "rgb(187,38,122)", stopOpacity: "1" }} /><stop offset="0.16" style={{ stopColor: "rgb(186,38,122)", stopOpacity: "1" }} /><stop offset="0.16" style={{ stopColor: "rgb(186,38,122)", stopOpacity: "1" }} /><stop offset="0.17" style={{ stopColor: "rgb(186,38,123)", stopOpacity: "1" }} /><stop offset="0.18" style={{ stopColor: "rgb(186,39,123)", stopOpacity: "1" }} /><stop offset="0.19" style={{ stopColor: "rgb(185,39,123)", stopOpacity: "1" }} /><stop offset="0.27" style={{ stopColor: "rgb(184,39,127)", stopOpacity: "1" }} /><stop offset="0.28" style={{ stopColor: "rgb(183,40,127)", stopOpacity: "1" }} /><stop offset="0.29" style={{ stopColor: "rgb(183,40,128)", stopOpacity: "1" }} /><stop offset="0.3" style={{ stopColor: "rgb(183,40,128)", stopOpacity: "1" }} /><stop offset="0.3" style={{ stopColor: "rgb(182,40,128)", stopOpacity: "1" }} /><stop offset="0.31" style={{ stopColor: "rgb(182,40,128)", stopOpacity: "1" }} /><stop offset="0.36" style={{ stopColor: "rgb(180,41,130)", stopOpacity: "1" }} /><stop offset="0.38" style={{ stopColor: "rgb(180,41,130)", stopOpacity: "1" }} /><stop offset="0.41" style={{ stopColor: "rgb(179,41,132)", stopOpacity: "1" }} /><stop offset="0.43" style={{ stopColor: "rgb(179,42,132)", stopOpacity: "1" }} /><stop offset="0.5" style={{ stopColor: "rgb(176,42,134)", stopOpacity: "1" }} /><stop offset="0.52" style={{ stopColor: "rgb(176,42,135)", stopOpacity: "1" }} /><stop offset="0.53" style={{ stopColor: "rgb(176,43,135)", stopOpacity: "1" }} /><stop offset="0.58" style={{ stopColor: "rgb(175,43,138)", stopOpacity: "1" }} /><stop offset="0.59" style={{ stopColor: "rgb(174,43,138)", stopOpacity: "1" }} /><stop offset="0.63" style={{ stopColor: "rgb(173,43,139)", stopOpacity: "1" }} /><stop offset="0.64" style={{ stopColor: "rgb(173,44,139)", stopOpacity: "1" }} /><stop offset="0.66" style={{ stopColor: "rgb(172,44,140)", stopOpacity: "1" }} /><stop offset="0.67" style={{ stopColor: "rgb(172,44,141)", stopOpacity: "1" }} /><stop offset="0.69" style={{ stopColor: "rgb(172,45,141)", stopOpacity: "1" }} /><stop offset="0.73" style={{ stopColor: "rgb(171,45,143)", stopOpacity: "1" }} /><stop offset="0.73" style={{ stopColor: "rgb(170,45,143)", stopOpacity: "1" }} /><stop offset="0.77" style={{ stopColor: "rgb(169,45,145)", stopOpacity: "1" }} /><stop offset="0.8" style={{ stopColor: "rgb(169,45,146)", stopOpacity: "1" }} /><stop offset="0.8" style={{ stopColor: "rgb(168,46,146)", stopOpacity: "1" }} /><stop offset="0.81" style={{ stopColor: "rgb(168,46,146)", stopOpacity: "1" }} /><stop offset="0.82" style={{ stopColor: "rgb(168,46,147)", stopOpacity: "1" }} /><stop offset="0.83" style={{ stopColor: "rgb(168,46,147)", stopOpacity: "1" }} /><stop offset="0.84" style={{ stopColor: "rgb(167,46,147)", stopOpacity: "1" }} /><stop offset="0.84" style={{ stopColor: "rgb(167,46,147)", stopOpacity: "1" }} /><stop offset="0.85" style={{ stopColor: "rgb(167,46,148)", stopOpacity: "1" }} /><stop offset="0.86" style={{ stopColor: "rgb(167,46,148)", stopOpacity: "1" }} /><stop offset="0.87" style={{ stopColor: "rgb(166,46,149)", stopOpacity: "1" }} /><stop offset="0.91" style={{ stopColor: "rgb(166,47,150)", stopOpacity: "1" }} /><stop offset="0.95" style={{ stopColor: "rgb(164,47,152)", stopOpacity: "1" }} /><stop offset="0.98" style={{ stopColor: "rgb(163,47,153)", stopOpacity: "1" }} /><stop offset="0.98" style={{ stopColor: "rgb(163,48,153)", stopOpacity: "1" }} /><stop offset="0.99" style={{ stopColor: "rgb(163,47,153)", stopOpacity: "1" }} /><stop offset="1" style={{ stopColor: "rgb(163,47,154)", stopOpacity: "1" }} /></linearGradient>
                                    </defs>
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/cocoati.cafe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-cream/50 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            >
                                <svg className="w-5 h-5 mx-auto" viewBox="0 0 500 500">
                                    <g transform="matrix(1.087928,0,0,1.087928,-131.90753,-168.961995)">
                                        <path d="M352.34,158.789L350.68,158.789C225.516,158.789 124.051,260.262 124.051,385.422C124.051,510.578 225.516,612.051 350.68,612.051L352.34,612.051C477.504,612.051 578.969,510.578 578.969,385.422C578.969,260.262 477.504,158.789 352.34,158.789" style={{ fill: "transparent" }} />
                                    </g>
                                    <g transform="matrix(1.087928,0,0,1.087928,-131.90753,-168.961995)">
                                        <path d="M373.371,326.852L373.371,303.449C373.371,292.059 381.012,289.379 386.352,289.379L419.336,289.379L419.336,239.25L373.922,239.051C323.539,239.051 312.082,276.461 312.082,300.41L312.082,326.852L282.949,326.852L282.949,385.422L312.336,385.422L312.336,531.789L371.102,531.789L371.102,385.422L414.703,385.422L416.828,362.41L420.074,326.852L373.371,326.852" style={{ fill: "currentColor" }} />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold hero-text mb-6 tracking-widest uppercase text-sm">
                            Explora
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/eventos"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Eventos relacionados
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/preguntas-frecuentes"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Preguntas frecuentes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/club-emperadores"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Club de Emperadores
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacto"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Contactanos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold hero-text mb-6 tracking-widest uppercase text-sm">
                            Compañía
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/historia"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Nuestra Historia
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Trabaja con nosotros
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/prensa"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Prensa e Influencers
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-500 dark:text-cream/50 hover:text-primary transition-colors text-sm"
                                >
                                    Sostenibilidad
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold hero-text mb-6 tracking-widest uppercase text-sm">
                            Contacto
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary !text-xl">location_on</span>
                                <span className="text-slate-500 dark:text-cream/50 text-sm">
                                    Calle Tun-kul entre Av. Satélite y C. Centauro,
                                    <br />
                                    Tulum, México
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary !text-xl">call</span>
                                <span className="text-slate-500 dark:text-cream/50 text-sm">+52 (984) 133-2337</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary !text-xl">mail</span>
                                <span className="text-slate-500 dark:text-cream/50 text-sm">imperio@cocoati.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 dark:text-cream/30 text-xs">
                        © 2024 COCOATI. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <a
                            href="#"
                            className="text-slate-400 dark:text-cream/30 hover:text-primary transition-colors text-xs"
                        >
                            Términos de Servicio
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 dark:text-cream/30 hover:text-primary transition-colors text-xs"
                        >
                            Política de Privacidad
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 dark:text-cream/30 hover:text-primary transition-colors text-xs"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
