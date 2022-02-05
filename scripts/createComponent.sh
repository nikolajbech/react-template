cd src/components
mkdir -p $1
cat <<EOT >> $1/$1.tsx
import type { FC } from 'react'

type Props = {
  param?: string
}

export const $1: FC<Props> = () => {
  return (
    <div>
      <p>
        $1
      </p>
    </div>
  )
}
EOT

cat <<EOT >> $1/$1.stories.tsx
import { ComponentProps, FC } from 'react'
import { $1 } from './$1'

export default {
  title: 'Components/$1',
  component: $1
}

type TemplateProps = ComponentProps<typeof $1>

const defaultProps = {

} as TemplateProps

const Template: FC<Partial<TemplateProps>> = (props) => (
  <$1
    {...{
      ...defaultProps,
      ...props
    }}
  />
)

export const Default = () =>
  <Template />
EOT

echo "export { $1 } from './$1/$1'" >> index.ts

code $1/$1.tsx
