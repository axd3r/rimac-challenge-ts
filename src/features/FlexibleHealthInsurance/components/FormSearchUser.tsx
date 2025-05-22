import { Grid } from "@mui/material";
import styles from '../FlexibleHealthInsurancePage.module.scss';
import { FormProvider } from "react-hook-form";
import { useSearchUser } from "../hooks/useSearchUser";
import { useFormErrors } from "../../../hooks/useFormErrors";
import { ActionButton, CheckBoxField, FormError, PatternField, SelectField } from "../../../components/forms";

const FormSearchUser = () => {

  const {
    form,
    onSubmit,
    isLoading,
  } = useSearchUser();

  const {
    handleSubmit,
  } = form;

  const optionsTypeDocument = [
    { label: 'DNI', value: 'DNI' }
  ];

  const { hasErrors, fieldErrors } = useFormErrors([
    'dni', 
    'phone',
    'policyAndPrivacyTerms',
    'commercialCommunicationsPolicy'
  ], form);

  return (
    <Grid container className={styles.containerOverflow}>
      <Grid item md={8} xs={12} className={styles.container__search__form}>  
        <div>
          <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.ctn__document}>
                <SelectField
                  name="typeDocument"
                  options={optionsTypeDocument}
                  sx={{
                    borderRadius: '8px 0px 0px 8px'
                  }}
                />
                <PatternField
                  name="dni"
                  format="########"
                  placeholder="Nro. de documento"
                  double={true}
                />
              </div>
              <div>
                {hasErrors && <FormError message={fieldErrors.dni?.message} />}
              </div>
              <div className={styles.ctn__input}>
                <PatternField
                  name="phone"
                  format="#########"
                  placeholder="Celular"
                />
              </div>
              {
                hasErrors && 
                <div style={{marginBottom: '17px'}}>
                  <FormError message={fieldErrors.phone?.message} />
                </div>
              }
              
              <div className={styles.ctn__general__terms}>
                <CheckBoxField
                  name="policyAndPrivacyTerms"
                />
                <span>Acepto la Política de Privacidad</span>
              </div>
              <div className={styles.ctn__general__terms}>
                <CheckBoxField
                  name="commercialCommunicationsPolicy"
                />
                <span>Acepto la Política de Comunicaciones Comerciales</span>
              </div>
              <div>
                <u>Aplican Términos y Condiciones</u>
              </div>
              <center>
              <div className={styles.ctn__actionBtn}>
                <ActionButton
                  isLoading={isLoading}
                  title='Cotiza aquí'
                  type='submit'
                />
              </div>
              </center>
            </form>
          </FormProvider>
        </div>

      </Grid>
    </Grid>
  )
}

export default FormSearchUser;
