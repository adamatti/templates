import { Button as RsButton } from '@adobe/react-spectrum';
import { Button as AkButton } from '@ariakit/react';
import { Button as RaButton } from 'react-aria-components';
import { Button as SButton } from '@/components/ui/button';
import DemoTable from './table';
// import './button.css';

export default function Page() {
  return (
    <div>
      Hello World!
      <br />
      <AkButton className="ak-button ak-button-default">
        @ariakit/react
      </AkButton>
      <br />
      <RsButton variant="accent">@adobe/react-spectrum</RsButton>
      <br />
      <RaButton>react-aria-components</RaButton>
      <br />
      <SButton>Shadcn Button</SButton>
      <br />

      <DemoTable />
    </div>
  );
}
