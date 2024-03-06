import Field from "../../ui/field/Field";
import Button from "../../ui/button/Button";
import styles from "./AddRecord.module.scss"
import {SubmitHandler, useForm} from "react-hook-form";
import {addRecord} from "../../../store/listRecordSlice/listRecordSlice";
import { v4 as uuidv4 } from "uuid";
import {useAppDispatch} from "../../../hooks/redux";

const AddRecord = () => {
    const {formState, register, handleSubmit, reset } = useForm();
    const dispatch = useAppDispatch()
    const idRecord = uuidv4();
    const onSubmit: SubmitHandler<{record: string}> = (data: {record: string}) => {
        dispatch(addRecord({id: idRecord, title: data.record, status: 'Not Completed' }));
        reset()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit as SubmitHandler<any>)} className={styles.container}>
            <Field
                name='record'
                register={register}
                placeholder='Add new record...'
                type='text'
                maxLength={20}
                required={true}
                errors={formState.errors.record}
            />
            <Button type='submit'>Add record</Button>
        </form>
    );
};

export default AddRecord;