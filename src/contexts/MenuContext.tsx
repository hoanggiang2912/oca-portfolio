import MarkdownIcon from "@/components/icons/MarkdownIcon";
import { useSearchParams } from "next/navigation";
import React, { ReactElement } from "react";

interface State {
  menuItems: MenuItem[];
  activeItem: null | MenuItem;
}

type Action =
  | { type: "DELETE"; payload: string } // payload is menu item name
  | { type: "ADD"; payload: MenuItem } // payload is new menu item
  | { type: "UPDATE_ACTIVE_ITEM"; payload: MenuItem };

interface MenuItem {
  title: string;
  name: string;
  url: string;
  icon: ReactElement;
}

interface MenuContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

function reducer(state: State, action: Action): State {
  const { type } = action;

  switch (type) {
    case "UPDATE_ACTIVE_ITEM":
      return { ...state, activeItem: action.payload };

    case "DELETE":
      return {
        ...state,
        menuItems: state.menuItems.filter(
          (item) => item.name !== action.payload
        ),
      };

    case "ADD":
      // Prevent duplicates
      if (state.menuItems.some((item) => item.name === action.payload.name)) {
        return state;
      }
      return {
        ...state,
        menuItems: [...state.menuItems, action.payload],
      };

    default:
      return state;
  }
}

const initialMenuItems: MenuItem[] = [
  {
    title: "index.md",
    name: "index",
    url: "?page=index",
    icon: <MarkdownIcon className="w-5 h-5 mr-2 text-drac-blue" />,
  },
  {
    title: "about-me.md",
    name: "about-me",
    url: "?page=about-me",
    icon: <MarkdownIcon className="w-5 h-5 mr-2 text-drac-blue" />,
  },
  {
    title: "projects.md",
    name: "projects",
    url: "?page=projects",
    icon: <MarkdownIcon className="w-5 h-5 mr-2 text-drac-blue" />,
  },
  {
    title: "education-career.md",
    name: "education-career",
    url: "?page=education-career",
    icon: <MarkdownIcon className="w-5 h-5 mr-2 text-drac-blue" />,
  },
  {
    title: "contact.md",
    name: "contact",
    url: "?page=contact",
    icon: <MarkdownIcon className="w-5 h-5 mr-2 text-drac-blue" />,
  },
];

const initialState: State = {
  menuItems: initialMenuItems,
  activeItem: initialMenuItems[0],
};

const menuContext = React.createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
  children: React.ReactNode;
}

function MenuProvider({ children }: MenuProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const { menuItems } = state;

  React.useEffect(() => {
    const nextActive =
      menuItems.find((item) => item.name === page) || menuItems[0] || null;
    console.log(nextActive);
    if (state.activeItem !== nextActive) {
      dispatch({ type: "UPDATE_ACTIVE_ITEM", payload: nextActive });
    }
  }, [page]);

  return (
    <menuContext.Provider value={{ state, dispatch }}>
      {children}
    </menuContext.Provider>
  );
}

function useMenu(): MenuContextType {
  const context = React.useContext(menuContext);

  if (!context) throw new Error("useMenu must be used within a MenuProvider");

  return context;
}

export { useMenu, MenuProvider };
