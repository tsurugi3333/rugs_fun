import { FC, useEffect, useState } from 'react';

interface SellEffectsProps {
  isWin: boolean | null;
  show: boolean;
  onAnimationComplete: () => void;
}

const SellEffects: FC<SellEffectsProps> = ({ isWin, show, onAnimationComplete }) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    velocity: { x: number; y: number };
    rotation: number;
    rotationSpeed: number;
  }>>([]);
  
  useEffect(() => {
    if (!show) return;
    
    // Create particles
    const newParticles = [];
    const particleCount = isWin ? 30 : 15;
    const colors = isWin 
      ? ['#FFD700', '#FFA500', '#32CD32', '#ffffff'] // Win colors: gold, orange, green, white
      : ['#FF4136', '#85144b', '#111111', '#444444']; // Lose colors: red, maroon, black, dark gray
    
    for (let i = 0; i < particleCount; i++) {
      const size = isWin 
        ? Math.random() * 10 + 5 // Larger particles for win
        : Math.random() * 6 + 2; // Smaller particles for lose
      
      const velocity = {
        x: (Math.random() - 0.5) * (isWin ? 15 : 8),
        y: (Math.random() - 0.5) * (isWin ? 15 : 8) - (isWin ? 5 : 2) // More upward bias for win
      };
      
      newParticles.push({
        id: i,
        x: 50, // Center X%
        y: 50, // Center Y%
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      });
    }
    
    setParticles(newParticles);
    
    // Animation frames
    let animationId: number;
    let frameCount = 0;
    const maxFrames = 120; // 2 seconds at 60fps
    
    const animate = () => {
      if (frameCount >= maxFrames) {
        cancelAnimationFrame(animationId);
        onAnimationComplete();
        return;
      }
      
      frameCount++;
      
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Apply gravity for win effect (particles fall down)
          const gravity = isWin ? 0.2 : 0.3;
          
          return {
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y + gravity,
            velocity: {
              x: particle.velocity.x * 0.98, // Friction
              y: particle.velocity.y + gravity
            },
            rotation: particle.rotation + particle.rotationSpeed
          };
        })
      );
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
      setParticles([]);
    };
  }, [show, isWin, onAnimationComplete]);
  
  if (!show) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            borderRadius: isWin ? '50%' : '0', // Circles for wins, squares for losses
            transform: `rotate(${particle.rotation}deg) translate(-50%, -50%)`,
            opacity: isWin ? 0.9 : 0.7
          }}
        />
      ))}
      
      {/* Flash effect overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: isWin ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)',
          animation: 'flash-animation 0.5s ease-out'
        }}
      />
      
      {/* Message for win/lose */}
      {isWin && (
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-yellow-400"
          style={{ 
            textShadow: '0 0 10px rgba(255, 215, 0, 0.8)', 
            animation: 'scale-up 0.5s ease-out' 
          }}
        >
          WIN!
        </div>
      )}
      
      {isWin === false && (
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-red-600"
          style={{ 
            textShadow: '0 0 10px rgba(255, 0, 0, 0.8)',
            animation: 'shake 0.5s ease-in-out' 
          }}
        >
          LOSS
        </div>
      )}
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes flash-animation {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes scale-up {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        
        @keyframes shake {
          0%, 100% { transform: translate(-50%, -50%); }
          20%, 60% { transform: translate(-48%, -50%); }
          40%, 80% { transform: translate(-52%, -50%); }
        }
      `}</style>
    </div>
  );
};

export default SellEffects;