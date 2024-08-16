import subHeaderStyles from './SubHeader.module.css'

// eslint-disable-next-line react/prop-types
export default function SubHeader({children}) {
  return (
    <div className={subHeaderStyles.container}>{children}</div>
  )
}
