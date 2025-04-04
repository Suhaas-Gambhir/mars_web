"use client";

import React, { useRef, useEffect } from "react";
import { useMousePosition } from "@/util/mouse";
import { useTheme } from "next-themes";

// Particle appearance configuration for both light and dark modes
const PARTICLE_CONFIG = {
	LIGHT_MODE: {
		COLOR: '0, 0, 0',  // RGB color value for particles in light mode
		SIZE: {
			MIN: 2,        // Minimum particle size in pixels
			MAX: 4         // Maximum particle size in pixels
		},
	},
	DARK_MODE: {
		COLOR: '255, 255, 255',  // RGB color value for particles in dark mode
		SIZE: {
			MIN: 2,     // Smaller particles in dark mode for subtle effect
			MAX: 4      // Maximum size slightly larger than MIN for variety
		},
	}
};

// Configuration for particle movement and behavior
const PARTICLE_BEHAVIOR = {
	DEFAULT_QUANTITY: 30,     // Number of particles to render
	DEFAULT_STATICITY: 50,    // How static/stable particles are (higher = more static)
	DEFAULT_EASE: 50,         // Easing value for particle movement (higher = smoother)
	SPEED: {
		MIN: -0.5,           // Minimum velocity in any direction
		MAX: 0.5,            // Maximum velocity in any direction
		SCALE: 0.2           // Multiplier for particle speed
	},
	MAGNETISM: {
		MIN: 0.1,            // Minimum magnetic pull towards mouse
		MAX: 4               // Maximum magnetic pull towards mouse
	},
	ALPHA: {
		MIN: 0.1,            // Minimum opacity of particles
		MAX: 0.7,            // Maximum opacity of particles
		INCREMENT: 0.02      // How fast opacity changes
	},
	EDGE_FADE_DISTANCE: 20    // Distance from canvas edge where particles start to fade
};

// Props interface for customizing particle behavior
interface ParticlesProps {
	className?: string;      // CSS class for styling the container
	quantity?: number;       // Override default particle quantity
	staticity?: number;      // Override default particle staticity
	ease?: number;          // Override default easing value
	refresh?: boolean;      // Force particle system to refresh
}

export default function Particles({
	className = "",
	quantity = 30,
	staticity = 50,
	ease = 50,
	refresh = false,
}: ParticlesProps) {
	const { theme } = useTheme();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasContainerRef = useRef<HTMLDivElement>(null);
	const context = useRef<CanvasRenderingContext2D | null>(null);
	const circles = useRef<Circle[]>([]);
	const mousePosition = useMousePosition();
	const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
	const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
	const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

	useEffect(() => {
		if (canvasRef.current) {

			context.current = canvasRef.current.getContext("2d");
		}
		initCanvas();
		animate();
		window.addEventListener("resize", initCanvas);

		return () => {
			window.removeEventListener("resize", initCanvas);
		};
	}, []);

	useEffect(() => {
		onMouseMove();
	}, [mousePosition.x, mousePosition.y]);

	useEffect(() => {
		initCanvas();
	}, [refresh]);

	useEffect(() => {
		// Clear and redraw particles when theme changes
		clearContext();
		drawParticles();
	}, [theme]);

	const initCanvas = () => {
		resizeCanvas();
		drawParticles();
	};

	const onMouseMove = () => {
		if (canvasRef.current) {
			const rect = canvasRef.current.getBoundingClientRect();
			const { w, h } = canvasSize.current;
			const x = mousePosition.x - rect.left - w / 2;
			const y = mousePosition.y - rect.top - h / 2;
			const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
			if (inside) {
				mouse.current.x = x;
				mouse.current.y = y;
			}
		}
	};

	type Circle = {
		x: number;
		y: number;
		translateX: number;
		translateY: number;
		size: number;
		alpha: number;
		targetAlpha: number;
		dx: number;
		dy: number;
		magnetism: number;
	};

	const resizeCanvas = () => {
		if (canvasContainerRef.current && canvasRef.current && context.current) {
			circles.current.length = 0;
			canvasSize.current.w = canvasContainerRef.current.offsetWidth;
			canvasSize.current.h = canvasContainerRef.current.offsetHeight;
			canvasRef.current.width = canvasSize.current.w * dpr;
			canvasRef.current.height = canvasSize.current.h * dpr;
			canvasRef.current.style.width = `${canvasSize.current.w}px`;
			canvasRef.current.style.height = `${canvasSize.current.h}px`;
			context.current.scale(dpr, dpr);
		}
	};

	const circleParams = (): Circle => {
		const x = Math.floor(Math.random() * canvasSize.current.w);
		const y = Math.floor(Math.random() * canvasSize.current.h);
		const translateX = 0;
		const translateY = 0;
		const config = theme === 'dark' ? PARTICLE_CONFIG.DARK_MODE : PARTICLE_CONFIG.LIGHT_MODE;
		const size = Math.floor(Math.random() * (config.SIZE.MAX - config.SIZE.MIN)) + config.SIZE.MIN;
		const alpha = 0;
		const targetAlpha = parseFloat((Math.random() * 
			(PARTICLE_BEHAVIOR.ALPHA.MAX - PARTICLE_BEHAVIOR.ALPHA.MIN) + 
			PARTICLE_BEHAVIOR.ALPHA.MIN).toFixed(1));
		const dx = (Math.random() - 0.5) * PARTICLE_BEHAVIOR.SPEED.SCALE;
		const dy = (Math.random() - 0.5) * PARTICLE_BEHAVIOR.SPEED.SCALE;
		const magnetism = PARTICLE_BEHAVIOR.MAGNETISM.MIN + 
			Math.random() * (PARTICLE_BEHAVIOR.MAGNETISM.MAX - PARTICLE_BEHAVIOR.MAGNETISM.MIN);
		return {
			x,
			y,
			translateX,
			translateY,
			size,
			alpha,
			targetAlpha,
			dx,
			dy,
			magnetism,
		};
	};

	const getParticleColor = () => {
		return theme === 'dark' ? PARTICLE_CONFIG.DARK_MODE.COLOR : PARTICLE_CONFIG.LIGHT_MODE.COLOR;
	};

	const drawCircle = (circle: Circle, update = false) => {
		if (context.current) {
			const { x, y, translateX, translateY, size, alpha } = circle;
			context.current.translate(translateX, translateY);
			context.current.beginPath();
			context.current.arc(x, y, size, 0, 2 * Math.PI);
			context.current.fillStyle = `rgba(${getParticleColor()}, ${alpha})`;
			context.current.fill();
			context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

			if (!update) {
				circles.current.push(circle);
			}
		}
	};

	const clearContext = () => {
		if (context.current) {
			context.current.clearRect(
				0,
				0,
				canvasSize.current.w,
				canvasSize.current.h,
			);
		}
	};

	const drawParticles = () => {
		clearContext();
		const particleCount = quantity;
		for (let i = 0; i < particleCount; i++) {
			const circle = circleParams();
			drawCircle(circle);
		}
	};

	const remapValue = (
		value: number,
		start1: number,
		end1: number,
		start2: number,
		end2: number,
	): number => {
		const remapped =
			((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
		return remapped > 0 ? remapped : 0;
	};

	const animate = () => {
		clearContext();
		circles.current.forEach((circle: Circle, i: number) => {
			// Handle the alpha value
			const edge = [
				circle.x + circle.translateX - circle.size, // distance from left edge
				canvasSize.current.w - circle.x - circle.translateX - circle.size, // distance from right edge
				circle.y + circle.translateY - circle.size, // distance from top edge
				canvasSize.current.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
			];
			const closestEdge = edge.reduce((a, b) => Math.min(a, b));
			const remapClosestEdge = parseFloat(
				remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
			);
			if (remapClosestEdge > 1) {
				circle.alpha += 0.02;
				if (circle.alpha > circle.targetAlpha) {
					circle.alpha = circle.targetAlpha;
				}
			} else {
				circle.alpha = circle.targetAlpha * remapClosestEdge;
			}
			circle.x += circle.dx;
			circle.y += circle.dy;
			circle.translateX +=
				(mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
				ease;
			circle.translateY +=
				(mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
				ease;
			// circle gets out of the canvas
			if (
				circle.x < -circle.size ||
				circle.x > canvasSize.current.w + circle.size ||
				circle.y < -circle.size ||
				circle.y > canvasSize.current.h + circle.size
			) {
				// remove the circle from the array
				circles.current.splice(i, 1);
				// create a new circle
				const newCircle = circleParams();
				drawCircle(newCircle);
				// update the circle position
			} else {
				drawCircle(
					{
						...circle,
						x: circle.x,
						y: circle.y,
						translateX: circle.translateX,
						translateY: circle.translateY,
						alpha: circle.alpha,
					},
					true,
				);
			}
		});
		window.requestAnimationFrame(animate);
	};

	return (
		<div className={className} ref={canvasContainerRef} aria-hidden="true">
			<canvas ref={canvasRef} />
		</div>
	);
}

