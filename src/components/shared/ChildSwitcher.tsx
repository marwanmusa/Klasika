import type { Student } from '@/types';

interface ChildSwitcherProps {
  children: Student[];
  selectedId: string;
  onSelect: (id: string) => void;
}

// Pill-style switcher for parents with more than one child.
export default function ChildSwitcher({ children, selectedId, onSelect }: ChildSwitcherProps) {
  if (children.length <= 1) return null;

  return (
    <div className="flex gap-2">
      {children.map((c) => {
        const active = c.id === selectedId;
        return (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className="px-4 py-2 cursor-pointer transition-all"
            style={{
              borderRadius: 9999,
              fontSize: 14,
              fontWeight: 450,
              fontFamily: "'Inter', sans-serif",
              border: active ? 'none' : '1px solid #a3a6af',
              background: active ? '#17191c' : 'transparent',
              color: active ? '#ffffff' : '#17191c',
            }}
          >
            {c.name}
          </button>
        );
      })}
    </div>
  );
}
