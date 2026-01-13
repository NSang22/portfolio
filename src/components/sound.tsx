// "use client";

// import { motion } from "framer-motion";
// import { Volume2, VolumeX } from "lucide-react";
// import React, { useEffect, useRef, useState } from "react";
// import { createPortal } from "react-dom";

// interface ModalProps {
//   onClose: () => void;
//   toggle: () => void;
// }

// const Modal: React.FC<ModalProps> = ({ onClose, toggle }) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   const modalRoot = document.getElementById("my-modal");
//   if (!modalRoot) return null;

//   return createPortal(
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="bg-black/20 border border-[#04D9FF]/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-lg text-center space-y-8">
//         <p className="font-light text-white">Do you like to play the background music?</p>
//         <div className="flex items-center justify-center space-x-4">
//           <button
//             onClick={toggle}
//             className="px-4 py-2 border border-[#04D9FF]/30 border-solid hover:bg-[#04D9FF]/10 rounded mr-2 text-white transition-all"
//           >
//             Yes
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 border border-[#04D9FF]/30 border-solid hover:bg-[#04D9FF]/10 rounded text-white transition-all"
//           >
//             No
//           </button>
//         </div>
//       </div>
//     </div>,
//     modalRoot
//   );
// };

// const Sound: React.FC = () => {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const [showModal, setShowModal] = useState<boolean>(false);
//   const [mounted, setMounted] = useState<boolean>(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleFirstUserInteraction = () => {
//     const musicConsent = localStorage.getItem("musicConsent");
//     if (musicConsent === "true" && !isPlaying && audioRef.current) {
//       audioRef.current.play().catch((error) => {
//         console.log("Audio playback failed:", error);
//       });
//       setIsPlaying(true);
//     }
//     ["click", "keydown", "touchstart"].forEach((event) =>
//       document.removeEventListener(event, handleFirstUserInteraction)
//     );
//   };

//   useEffect(() => {
//     if (!mounted) return;

//     const consent = localStorage.getItem("musicConsent");
//     const consentTime = localStorage.getItem("consentTime");

//     // Check if consent is still valid (within 3 days)
//     if (
//       consent &&
//       consentTime &&
//       new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date().getTime()
//       // 3 * 24 * 60 * 60 * 1000 = 3 days in milliseconds
//       // Change 3 to 7 for 1 week, or 30 for 1 month
//     ) {
//       setIsPlaying(consent === "true");
//       if (consent === "true") {
//         ["click", "keydown", "touchstart"].forEach((event) =>
//           document.addEventListener(event, handleFirstUserInteraction)
//         );
//       }
//     } else {
//       setShowModal(true); // Show modal if no consent or expired
//     }

//     return () => {
//       ["click", "keydown", "touchstart"].forEach((event) =>
//         document.removeEventListener(event, handleFirstUserInteraction)
//       );
//     };
//   }, [mounted]);

//   const toggle = () => {
//     const newState = !isPlaying;
//     setIsPlaying(newState);
    
//     if (audioRef.current) {
//       if (newState) {
//         audioRef.current.play().catch((error) => {
//           console.log("Audio playback failed:", error);
//         });
//       } else {
//         audioRef.current.pause();
//       }
//     }
    
//     localStorage.setItem("musicConsent", String(newState));
//     localStorage.setItem("consentTime", new Date().toISOString());
//     setShowModal(false);
//   };

//   if (!mounted) return null;

//   return (
//     <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
//       {showModal && (
//         <Modal onClose={() => setShowModal(false)} toggle={toggle} />
//       )}
//       <audio ref={audioRef} loop>
//         {/* IMPORTANT: Put your audio file in public/audio/ folder */}
//         <source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
//         {/* Replace with your audio filename: /audio/your-music.mp3 */}
//         Your browser does not support the audio element.
//       </audio>
//       <motion.button
//         onClick={toggle}
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 1 }}
//         className="w-10 h-10 xs:w-14 xs:h-14 text-white rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 bg-black/20 border border-[#04D9FF]/30 hover:bg-[#04D9FF]/10 transition-all"
//         aria-label="Sound control button"
//       >
//         {isPlaying ? (
//           <Volume2
//             className="w-full h-full text-white group-hover:text-[#04D9FF] transition-colors"
//             strokeWidth={1.5} // 1.5 = line thickness. Try: 1 for thin, 2 for thick
//           />
//         ) : (
//           <VolumeX
//             className="w-full h-full text-white group-hover:text-[#04D9FF] transition-colors"
//             strokeWidth={1.5}
//           />
//         )}
//       </motion.button>
//     </div>
//   );
// };

// export default Sound;