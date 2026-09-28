import { X } from "lucide-react";

interface BlogNotificationToastProps {
  onDismiss: () => void;
  onAction: () => void;
}

export function BlogNotificationToast({ onDismiss, onAction }: BlogNotificationToastProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 pr-5 max-w-[380px] border border-gray-100 relative animate-slide-in">
      {/* Close Button */}
      <button
        onClick={onDismiss}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 hover:bg-gray-100 rounded-full"
        aria-label="Fechar"
      >
        {/* <X className="w-4 h-4" /> */}
      </button>

      {/* Main Content */}
      <div className="flex gap-3 mb-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-gray-100">
            <img
              src="/nexus-logo-blue-bg.png"
              alt="Nexus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0 pt-0.5">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-[15px] text-gray-900 tracking-tight">
              Time Nexus
            </span>
            <span className="text-[12px] text-gray-400 font-medium">
              2 min atrás
            </span>
          </div>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Novos posts publicados! Confira os últimos insights e atualizações da comunidade 🚀
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 ml-14">
        <button
          onClick={onDismiss}
          className="flex-1 px-4 py-2 text-[13.5px] font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-all duration-200 border border-gray-200"
        >
          Dispensar
        </button>
        <button
          onClick={onAction}
          className="flex-1 px-4 py-2 text-[13.5px] font-semibold text-white bg-gradient-to-r from-[#0a2e4f] to-[#1a4e7f] hover:from-[#0d3a5f] hover:to-[#1f5c8f] rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Ver novidades
        </button>
      </div>
    </div>
  );
}
