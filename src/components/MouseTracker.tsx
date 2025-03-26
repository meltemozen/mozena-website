import { SVGProps, useCallback, useEffect, useState } from "react"

export function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path fill="#fff" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" />
    </svg>
  )
}

export default function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHoveringProject, setIsHoveringProject] = useState(false)

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }, [])

  const handleMouseOver = useCallback((event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      setIsHoveringProject(event.target.dataset.hover === "project")
    } else {
      setIsHoveringProject(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [handleMouseMove, handleMouseOver])

  const size = isHoveringProject ? 64 : 16

  return (
    <div
      className="text-black bg-current border border-current fixed rounded-3xl translate-x-1/2 translate-y-1/2 pointer-events-none flex justify-center items-center transition-all duration-[500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      style={{
        width: size,
        aspectRatio: 1,
        left: position.x - size,
        top: position.y - size,
      }}
    >
      {
        <Arrow
          style={{
            width: isHoveringProject ? size / 2 : 0,
            height: isHoveringProject ? size / 2 : 0,
            transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transformOrigin: "center",
          }}
          className="origin-center transition-all duration-[500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        />
      }
    </div>
  )
}
