import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useInitStore } from "../../../store/initStore";
import { useNavigate } from "react-router-dom";
import { SearchUser } from "../types/FlexibleHealthInsurance.types";
import UserService from "../services/UserService";

const schemaValidation = yup
  .object({
    typeDocument: yup
      .string()
      .required(),
    dni: yup
      .string()
      .min(8, 'El DNI debe tener 8 caracteres')
      .max(8, 'El DNI debe tener 8 caracteres')
      .required('El DNI es obligatorio.'),
    phone: yup
      .string()
      .min(9, 'El celular debe tener 9 caracteres')
      .max(9, 'El celular debe tener 9 caracteres')
      .required('El celular es obligatorio.'),
    policyAndPrivacyTerms: yup
      .boolean()
      .oneOf([true], 'Debes aceptar la política de privacidad')
      .required('Debes aceptar la política de privacidad'),
    commercialCommunicationsPolicy: yup
      .boolean()
      .oneOf([true], 'Debes aceptar la política de comunicaciones comerciales')
      .required('Debes aceptar la política de comunicaciones comerciales'),
  });

const userService = new UserService();

export const useSearchUser = () => {

  const [initialValues, setInitialValues] = useState<SearchUser>({
    typeDocument: 'DNI',
    dni: '',
    phone: '',
    policyAndPrivacyTerms: false,
    commercialCommunicationsPolicy: false
  });

  const setUserData = useInitStore(state => state.setUserData);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SearchUser>({
    defaultValues: initialValues,
    resolver: yupResolver(schemaValidation as any)
  });

  const onSubmit = async (dataSearch: SearchUser ) => {
    try {
      setIsLoading(true);
      const { data } = await userService.getUserGeneric();
      setUserData({
        ...data,
        ...dataSearch
      });
      setIsLoading(false);
      navigate('/plans');
    } catch (error: any) {
      setIsLoading(false);
    }
  }

  return {
    form,
    setInitialValues,
    onSubmit,
    isLoading,
  }
};
