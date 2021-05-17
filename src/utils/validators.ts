export const required = (value: string) => (value ? undefined : 'Field is required');

export const maxLength = (max: number) => (value: string) =>
    value && value.length > max ? `Max. lenght ${max}` : undefined;
