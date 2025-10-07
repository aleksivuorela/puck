import { ReactElement } from 'react';
import { BaseEntry, ContentfulClientApi } from 'contentful';
export { createClient } from 'contentful';

type FieldOption = {
    label: string;
    value: string | number | boolean | undefined | null | object;
};
type FieldOptions = Array<FieldOption> | ReadonlyArray<FieldOption>;
type BaseField = {
    label?: string;
    labelIcon?: ReactElement;
    metadata?: Metadata;
    visible?: boolean;
};
type TextField = BaseField & {
    type: "text";
    placeholder?: string;
    contentEditable?: boolean;
};
type NumberField = BaseField & {
    type: "number";
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
};
type TextareaField = BaseField & {
    type: "textarea";
    placeholder?: string;
    contentEditable?: boolean;
};
type SelectField = BaseField & {
    type: "select";
    options: FieldOptions;
};
type RadioField = BaseField & {
    type: "radio";
    options: FieldOptions;
};
type ArrayField<Props extends {
    [key: string]: any;
}[] = {
    [key: string]: any;
}[], UserField extends {} = {}> = BaseField & {
    type: "array";
    arrayFields: {
        [SubPropName in keyof Props[0]]: UserField extends {
            type: PropertyKey;
        } ? Field<Props[0][SubPropName], UserField> | UserField : Field<Props[0][SubPropName], UserField>;
    };
    defaultItemProps?: Props[0];
    getItemSummary?: (item: Props[0], index?: number) => string;
    max?: number;
    min?: number;
};
type ObjectField<Props extends any = {
    [key: string]: any;
}, UserField extends {} = {}> = BaseField & {
    type: "object";
    objectFields: {
        [SubPropName in keyof Props]: UserField extends {
            type: PropertyKey;
        } ? Field<Props[SubPropName]> | UserField : Field<Props[SubPropName]>;
    };
};
type Adaptor<AdaptorParams = {}, TableShape extends Record<string, any> = {}, PropShape = TableShape> = {
    name: string;
    fetchList: (adaptorParams?: AdaptorParams) => Promise<TableShape[] | null>;
    mapProp?: (value: TableShape) => PropShape;
};
type NotUndefined<T> = T extends undefined ? never : T;
type ExternalFieldWithAdaptor<Props extends any = {
    [key: string]: any;
}> = BaseField & {
    type: "external";
    placeholder?: string;
    adaptor: Adaptor<any, any, Props>;
    adaptorParams?: object;
    getItemSummary: (item: NotUndefined<Props>, index?: number) => string;
};
type ExternalField<Props extends any = {
    [key: string]: any;
}> = BaseField & {
    type: "external";
    placeholder?: string;
    fetchList: (params: {
        query: string;
        filters: Record<string, any>;
    }) => Promise<any[] | null>;
    mapProp?: (value: any) => Props;
    mapRow?: (value: any) => Record<string, string | number | ReactElement>;
    getItemSummary?: (item: NotUndefined<Props>, index?: number) => string;
    showSearch?: boolean;
    renderFooter?: (props: {
        items: any[];
    }) => ReactElement;
    initialQuery?: string;
    filterFields?: Record<string, Field>;
    initialFilters?: Record<string, any>;
};
type CustomFieldRender<Value extends any> = (props: {
    field: CustomField<Value>;
    name: string;
    id: string;
    value: Value;
    onChange: (value: Value) => void;
    readOnly?: boolean;
}) => ReactElement;
type CustomField<Value extends any> = BaseField & {
    type: "custom";
    render: CustomFieldRender<Value>;
    contentEditable?: boolean;
};
type SlotField = BaseField & {
    type: "slot";
    allow?: string[];
    disallow?: string[];
};
type Field<ValueType = any, UserField extends {} = {}> = TextField | NumberField | TextareaField | SelectField | RadioField | ArrayField<ValueType extends {
    [key: string]: any;
}[] ? ValueType : never, UserField> | ObjectField<ValueType, UserField> | ExternalField<ValueType> | ExternalFieldWithAdaptor<ValueType> | CustomField<ValueType> | SlotField;

type Metadata = {
    [key: string]: any;
};

type Entry<Fields extends Record<string, any> = {}> = BaseEntry & {
    fields: Fields;
};
declare function createFieldContentful<T extends Entry = Entry>(contentType: string, options?: {
    client?: ContentfulClientApi<undefined>;
    space?: string;
    accessToken?: string;
    titleField?: string;
    filterFields?: ExternalField["filterFields"];
    initialFilters?: ExternalField["initialFilters"];
}): ExternalField<T>;

export { type Entry, createFieldContentful, createFieldContentful as default };
