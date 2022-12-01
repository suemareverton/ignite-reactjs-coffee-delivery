import { createContext, ReactNode } from 'react'

interface StoreContextType {
  // dummy_variable: number
}

export const StoreContext = createContext({} as StoreContextType)

interface StoreContextProviderProps {
  children: ReactNode
}

export function StoreContextProvider({ children }: StoreContextProviderProps) {
  return (
    <StoreContext.Provider
      value={
        {
          // dummy_variable,
        }
      }
    >
      {children}
    </StoreContext.Provider>
  )
}
