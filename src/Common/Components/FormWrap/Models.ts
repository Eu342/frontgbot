/** Интерфейс параметров контроллера формы. */
export interface IFormControls {
    /** Текст кнопки отправки. */
    submitLabel: string;
    /** Обработчик отправки формы. */
    onSubmit: () => void;
    /** Текст кнопки отмены. */
    cancelLabel?: string;
    /** Обработчик события отмены. */
    onCancel?: () => void;
}