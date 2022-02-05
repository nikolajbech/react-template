cd src/pages
mkdir -p $1/components
cd $1/components
mkdir -p $2
cat <<EOT >> $2/$2.tsx
import type { FC } from 'react'

type Props = {
  param?: string
}

export const $2: FC<Props> = () => {
  return (
    <div className='default-component'>
      <p>
        $2
      </p>
    </div>
  )
}
EOT

cat <<EOT >> $2/$2.stories.tsx
import { ComponentProps, FC } from 'react'
import { $2 } from './$2'

export default {
  title: '$1/$2',
  component: $2
}

type TemplateProps = ComponentProps<typeof $2>

const defaultProps = {

} as TemplateProps

const Template: FC<Partial<TemplateProps>> = (props) => (
  <$2
    {...{
      ...defaultProps,
      ...props
    }}
  />
)

export const Default = () =>
  <Template />
EOT

echo "export { $2 } from './$2/$2'" >> index.ts

code $2/$2.tsx
