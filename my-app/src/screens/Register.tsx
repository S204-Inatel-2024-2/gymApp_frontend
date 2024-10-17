import { Center, Heading, Image, Text, VStack } from '@gluestack-ui/themed';
import BackgroundImg from '@assets/Backgroud.png';
import Logo from '@assets/Logo.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from '@react-navigation/native';

export function Register() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleToHome() {
    navigation.navigate("premiunscreen");
  }

  return (
    <VStack flex={1}>
      <Image
        w="$full"
        h="$full"
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Treino em uma academia"
        position="absolute"
      />
      <VStack flex={1}>
        <Center my="$8">
          <Image w="$2/3" h="$64" source={Logo} alt="Logo" />
        </Center>
        <Center gap="$6">
          <Heading color="$orange500" paddingBottom={20}>
            Seu treino na palma da mão!
          </Heading>
          <Input 
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Input placeholder="Repita a senha" secureTextEntry />
          <Button variant="outline" title="Registrar e entrar" onPress={handleToHome}/>

        </Center>
      </VStack>
    </VStack>
  );
}
