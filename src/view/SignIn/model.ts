// -> ReactJS
import { useCallback, useState } from "react";

// -> Mutation lib
import { useMutation } from "@tanstack/react-query";

// -> Input lib
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// -> Toast lib
import toast from 'react-hot-toast';

// -> Custom hooks
import { useAuth } from "@/app/hooks/useAuth";

// -> API
import { AuthServices } from "@/app/services/AuthServices";

const schemaForm = z.object({
  username: z.string(),
  password: z.string()
})

type FormSchema = z.infer<typeof schemaForm>

export function useModel() {
  const { signIn } = useAuth();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const { 
    register, 
    formState: { isValid },
    handleSubmit: handleFormSubmit,
  } = useForm<FormSchema>({
    resolver: zodResolver(schemaForm)
  })

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (params: FormSchema) => {
      return await AuthServices.signIn(
        String(params.username.toLowerCase()), 
        params.password
      );
    },
    onSuccess: (res) => {
      signIn(res.accessToken, res.user)
    },
    onError: () => {
      toast.error('Credenciais inválidas.', {
        style: {
          background: '#dc2626',
          color: '#FFF',
          fontSize: '14px',
          fontWeight: '600'
        }
      })
    }
  })

  const handleSubmit = handleFormSubmit(async (data) => {
    await mutateAsync(data)
  });

  const togglePasswordVisible = useCallback(() => {
    setIsPasswordVisible(prevState => !prevState);
  }, []);

  return {
    isValid,
    isPending,
    isPasswordVisible,
    register,
    handleSubmit,
    togglePasswordVisible,
  }
}