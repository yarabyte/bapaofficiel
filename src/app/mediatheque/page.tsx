import { StubPage, stubMetadata } from '@/lib/stub-page';
import { stubPagesByPath } from '@/lib/stub-pages-data';

const config = stubPagesByPath['mediatheque'];

export const metadata = stubMetadata(config);

export default function Page() {
  return <StubPage config={config} />;
}
