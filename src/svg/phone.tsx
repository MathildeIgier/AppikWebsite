import * as React from "react"

function PhoneSvg(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 520 545"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width={256}
        height={520}
        x={128}
        y={16}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={22}
        rx={48}
        ry={48}
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24"
      />
    </svg>
  )
}

export default PhoneSvg