import clsx from "clsx"
import { createContext } from "react"
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native"

type Variants = "primary" | "secondary"

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants
  isLoading?: boolean
  title: string
}

const ThemeContext = createContext<{ variant?: Variants }>({})

function Button({
  variant = "primary",
  children,
  isLoading,
  className,
  title,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={clsx(
        "rounded-xl min-h-[62px] flex flex-row justify-center items-center",
        {
          "bg-button-primary": variant === "primary",
          "bg-button-secondary": variant === "secondary",
        },
        className
      )}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      <Text className="text-text-primary font-bold text-3xl">
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  )
}

export { Button }

