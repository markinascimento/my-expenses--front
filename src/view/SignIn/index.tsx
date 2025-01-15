// -> Model
import { useModel } from './model';

// -> View
import { View } from './view';

export function SignIn (){
  const model = useModel();

  return <View props={model} />;
}