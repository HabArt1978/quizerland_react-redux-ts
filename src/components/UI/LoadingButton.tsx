import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import { FC, ReactNode } from "react"

type LoadingButtonProps = {
  loading: boolean
  children: ReactNode[] | ReactNode
  [k: string]: any
}
const LoadingButton: FC<LoadingButtonProps> = ({
  loading,
  children,
  ...props
}) => {
  return (
    <Button
      size="medium"
      disabled={loading}
      {...props}
    >
      {loading && (
        <span style={{ marginRight: 10, display: "flex" }}>
          <CircularProgress
            size={16}
            sx={{ color: "lightgrey" }}
          />
        </span>
      )}
      {children}
    </Button>
  )
}
export default LoadingButton
