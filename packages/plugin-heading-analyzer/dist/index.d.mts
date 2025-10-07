import { ReactElement, CSSProperties, ReactNode, JSX } from 'react';

type ItemSelector = {
    index: number;
    zone?: string;
};

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
type Fields<ComponentProps extends DefaultComponentProps = DefaultComponentProps, UserField extends {} = {}> = {
    [PropName in keyof Omit<ComponentProps, "editMode">]: UserField extends {
        type: PropertyKey;
    } ? Field<ComponentProps[PropName], UserField> | UserField : Field<ComponentProps[PropName]>;
};
type FieldProps<F = Field<any>, ValueType = any> = {
    field: F;
    value: ValueType;
    id?: string;
    onChange: (value: ValueType, uiState?: Partial<UiState>) => void;
    readOnly?: boolean;
};

type DropZoneProps = {
    zone: string;
    allow?: string[];
    disallow?: string[];
    style?: CSSProperties;
    minEmptyHeight?: number;
    className?: string;
    collisionAxis?: DragAxis;
};

type PuckContext = {
    renderDropZone: React.FC<DropZoneProps>;
    metadata: Metadata;
    isEditing: boolean;
    dragRef: ((element: Element | null) => void) | null;
};
type DefaultRootFieldProps = {
    title?: string;
};
type DefaultComponentProps = {
    [key: string]: any;
};

type WithId<Props> = Props & {
    id: string;
};
type WithPuckProps<Props> = Props & {
    puck: PuckContext;
    editMode?: boolean;
};
type AsFieldProps<Props> = Omit<Props, "children" | "puck" | "editMode">;
type WithChildren<Props> = Props & {
    children: ReactNode;
};
type UserGenerics<UserConfig extends Config = Config, UserParams extends ExtractConfigParams<UserConfig> = ExtractConfigParams<UserConfig>, UserData extends Data<UserParams["props"], UserParams["rootProps"]> | Data = Data<UserParams["props"], UserParams["rootProps"]>, UserAppState extends PrivateAppState<UserData> = PrivateAppState<UserData>, UserPublicAppState extends AppState<UserData> = AppState<UserData>, UserComponentData extends ComponentData = UserData["content"][0]> = {
    UserConfig: UserConfig;
    UserParams: UserParams;
    UserProps: UserParams["props"];
    UserRootProps: UserParams["rootProps"] & DefaultRootFieldProps;
    UserData: UserData;
    UserAppState: UserAppState;
    UserPublicAppState: UserPublicAppState;
    UserComponentData: UserComponentData;
    UserField: UserParams["field"];
};
type ExtractField<UserField extends {
    type: PropertyKey;
}, T extends UserField["type"]> = Extract<UserField, {
    type: T;
}>;

type SlotComponent = (props?: Omit<DropZoneProps, "zone">) => ReactNode;
type PuckComponent<Props> = (props: WithId<WithPuckProps<{
    [K in keyof Props]: WithDeepSlots<Props[K], SlotComponent>;
}>>) => JSX.Element;
type ResolveDataTrigger = "insert" | "replace" | "load" | "force";
type WithPartialProps<T, Props extends DefaultComponentProps> = Omit<T, "props"> & {
    props?: Partial<Props>;
};
type ComponentConfigInternal<RenderProps extends DefaultComponentProps, FieldProps extends DefaultComponentProps, DataShape = Omit<ComponentData<FieldProps>, "type">, // NB this doesn't include AllProps, so types will not contain deep slot types. To fix, we require a breaking change.
UserField extends BaseField = {}> = {
    render: PuckComponent<RenderProps>;
    label?: string;
    defaultProps?: FieldProps;
    fields?: Fields<FieldProps, UserField>;
    permissions?: Partial<Permissions>;
    inline?: boolean;
    resolveFields?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean> & {
            id: string;
        }>;
        fields: Fields<FieldProps>;
        lastFields: Fields<FieldProps>;
        lastData: DataShape | null;
        metadata: Metadata;
        appState: AppState;
        parent: ComponentData | null;
    }) => Promise<Fields<FieldProps>> | Fields<FieldProps>;
    resolveData?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean> & {
            id: string;
        }>;
        lastData: DataShape | null;
        metadata: Metadata;
        trigger: ResolveDataTrigger;
    }) => Promise<WithPartialProps<DataShape, FieldProps>> | WithPartialProps<DataShape, FieldProps>;
    resolvePermissions?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean> & {
            id: string;
        }>;
        lastPermissions: Partial<Permissions>;
        permissions: Partial<Permissions>;
        appState: AppState;
        lastData: DataShape | null;
    }) => Promise<Partial<Permissions>> | Partial<Permissions>;
    metadata?: Metadata;
};
type RootConfigInternal<RootProps extends DefaultComponentProps = DefaultComponentProps, UserField extends BaseField = {}> = Partial<ComponentConfigInternal<WithChildren<RootProps>, AsFieldProps<RootProps>, RootData<AsFieldProps<RootProps>>, UserField>>;
type Category<ComponentName> = {
    components?: ComponentName[];
    title?: string;
    visible?: boolean;
    defaultExpanded?: boolean;
};
type ConfigInternal<Props extends DefaultComponents = DefaultComponents, RootProps extends DefaultComponentProps = DefaultComponentProps, CategoryName extends string = string, UserField extends {} = {}> = {
    categories?: Record<CategoryName, Category<keyof Props>> & {
        other?: Category<keyof Props>;
    };
    components: {
        [ComponentName in keyof Props]: Omit<ComponentConfigInternal<Props[ComponentName], Props[ComponentName], Omit<ComponentData<Props[ComponentName]>, "type">, UserField>, "type">;
    };
    root?: RootConfigInternal<RootProps, UserField>;
};
type DefaultComponents = Record<string, any>;
type Config<PropsOrParams extends LeftOrExactRight<PropsOrParams, DefaultComponents, ConfigParams> = DefaultComponents | ConfigParams, RootProps extends DefaultComponentProps = any, CategoryName extends string = string> = PropsOrParams extends ConfigParams<infer ParamComponents, infer ParamRoot, infer ParamCategoryName, never> ? ConfigInternal<ParamComponents, ParamRoot, ParamCategoryName[number]> : PropsOrParams extends ConfigParams<infer ParamComponents, infer ParamRoot, infer ParamCategoryName, infer ParamFields> ? ConfigInternal<ParamComponents, ParamRoot, ParamCategoryName[number], ParamFields[keyof ParamFields] & BaseField> : PropsOrParams extends ConfigParams<infer ParamComponents, infer ParamRoot, infer ParamCategoryName, any> ? ConfigInternal<ParamComponents, ParamRoot, ParamCategoryName[number], {}> : ConfigInternal<PropsOrParams, RootProps, CategoryName>;
type ExtractConfigParams<UserConfig extends ConfigInternal> = UserConfig extends ConfigInternal<infer PropsOrParams, infer RootProps, infer CategoryName, infer UserField> ? {
    props: PropsOrParams;
    rootProps: RootProps & DefaultRootFieldProps;
    categoryNames: CategoryName;
    field: UserField extends {
        type: string;
    } ? UserField : Field;
} : never;

type BaseData<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = {
    readOnly?: Partial<Record<keyof Props, boolean>>;
};
type RootDataWithProps<Props extends DefaultComponentProps = DefaultRootFieldProps> = BaseData<Props> & {
    props: Props;
};
type RootDataWithoutProps<Props extends DefaultComponentProps = DefaultRootFieldProps> = Props;
type RootData<Props extends DefaultComponentProps = DefaultRootFieldProps> = Partial<RootDataWithProps<AsFieldProps<Props>>> & Partial<RootDataWithoutProps<Props>>;
type ComponentData<Props extends DefaultComponentProps = DefaultComponentProps, Name = string, Components extends Record<string, DefaultComponentProps> = Record<string, DefaultComponentProps>> = {
    type: Name;
    props: WithDeepSlots<WithId<Props>, Content<Components>>;
} & BaseData<Props>;
type ComponentDataOptionalId<Props extends DefaultComponentProps = DefaultComponentProps, Name = string> = {
    type: Name;
    props: Props & {
        id?: string;
    };
} & BaseData<Props>;
type ComponentDataMap<Components extends DefaultComponents = DefaultComponents> = {
    [K in keyof Components]: ComponentData<Components[K], K extends string ? K : never, Components>;
}[keyof Components];
type Content<PropsMap extends {
    [key: string]: DefaultComponentProps;
} = {
    [key: string]: DefaultComponentProps;
}> = ComponentDataMap<PropsMap>[];
type Data<Components extends DefaultComponents = DefaultComponents, RootProps extends DefaultComponentProps = DefaultRootFieldProps> = {
    root: WithDeepSlots<RootData<RootProps>, Content<Components>>;
    content: Content<Components>;
    zones?: Record<string, Content<Components>>;
};
type Metadata = {
    [key: string]: any;
};

type ItemWithId = {
    _arrayId: string;
    _originalIndex: number;
};
type ArrayState = {
    items: ItemWithId[];
    openId: string;
};
type UiState = {
    leftSideBarVisible: boolean;
    rightSideBarVisible: boolean;
    leftSideBarWidth?: number | null;
    rightSideBarWidth?: number | null;
    itemSelector: ItemSelector | null;
    arrayState: Record<string, ArrayState | undefined>;
    previewMode: "interactive" | "edit";
    componentList: Record<string, {
        components?: string[];
        title?: string;
        visible?: boolean;
        expanded?: boolean;
    }>;
    isDragging: boolean;
    viewports: {
        current: {
            width: number;
            height: number | "auto";
        };
        controlsVisible: boolean;
        options: Viewport[];
    };
    field: {
        focus?: string | null;
    };
};
type AppState<UserData extends Data = Data> = {
    data: UserData;
    ui: UiState;
};

type ZoneType = "root" | "dropzone" | "slot";
type PuckNodeData = {
    data: ComponentData;
    flatData: ComponentData;
    parentId: string | null;
    zone: string;
    path: string[];
};
type PuckZoneData = {
    contentIds: string[];
    type: ZoneType;
};
type NodeIndex = Record<string, PuckNodeData>;
type ZoneIndex = Record<string, PuckZoneData>;
type PrivateAppState<UserData extends Data = Data> = AppState<UserData> & {
    indexes: {
        nodes: NodeIndex;
        zones: ZoneIndex;
    };
};
type BuiltinTypes = Date | RegExp | Error | Function | symbol | null | undefined;
/**
 * Recursively walk T and replace Slots with SlotComponents
 */
type WithDeepSlots<T, SlotType = T> = T extends Slot ? SlotType : T extends (infer U)[] ? Array<WithDeepSlots<U, SlotType>> : T extends (infer U)[] ? WithDeepSlots<U, SlotType>[] : T extends BuiltinTypes ? T : T extends object ? {
    [K in keyof T]: WithDeepSlots<T[K], SlotType>;
} : T;
type ConfigParams<Components extends DefaultComponents = DefaultComponents, RootProps extends DefaultComponentProps = any, CategoryNames extends string[] = string[], UserFields extends FieldsExtension = FieldsExtension> = {
    components?: Components;
    root?: RootProps;
    categories?: CategoryNames;
    fields?: AssertHasValue<UserFields>;
};
type FieldsExtension = {
    [Type in string]: {
        type: Type;
    };
};
type Exact<T, Target> = Record<Exclude<keyof T, keyof Target>, never>;
type LeftOrExactRight<Union, Left, Right> = (Left & Union extends Right ? Exact<Union, Right> : Left) | (Right & Exact<Union, Right>);
type AssertHasValue<T, True = T, False = never> = [keyof T] extends [
    never
] ? False : True;

type MapFnParams<ThisField = Field> = {
    value: any;
    parentId: string;
    propName: string;
    field: ThisField;
    propPath: string;
};

type FieldTransformFnParams<T> = Omit<MapFnParams<T>, "parentId"> & {
    isReadOnly: boolean;
    componentId: string;
};
type FieldTransformFn<T> = (params: FieldTransformFnParams<T>) => any;
type FieldTransforms<UserConfig extends Config = Config<{
    fields: {};
}>, // Setting fields: {} helps TS choose default field types
G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>, UserField extends {
    type: string;
} = Field | G["UserField"]> = Partial<{
    [Type in UserField["type"]]: FieldTransformFn<ExtractField<UserField, Type>>;
}>;

type RenderFunc<Props extends {
    [key: string]: any;
} = {
    children: ReactNode;
}> = (props: Props) => ReactElement;
declare const overrideKeys: readonly ["header", "headerActions", "fields", "fieldLabel", "drawer", "drawerItem", "componentOverlay", "outline", "puck", "preview"];
type OverrideKey = (typeof overrideKeys)[number];
type OverridesGeneric<Shape extends {
    [key in OverrideKey]: any;
}> = Shape;
type Overrides<UserConfig extends Config = Config> = OverridesGeneric<{
    fieldTypes: Partial<FieldRenderFunctions<UserConfig>>;
    header: RenderFunc<{
        actions: ReactNode;
        children: ReactNode;
    }>;
    actionBar: RenderFunc<{
        label?: string;
        children: ReactNode;
        parentAction: ReactNode;
    }>;
    headerActions: RenderFunc<{
        children: ReactNode;
    }>;
    preview: RenderFunc;
    fields: RenderFunc<{
        children: ReactNode;
        isLoading: boolean;
        itemSelector?: ItemSelector | null;
    }>;
    fieldLabel: RenderFunc<{
        children?: ReactNode;
        icon?: ReactNode;
        label: string;
        el?: "label" | "div";
        readOnly?: boolean;
        className?: string;
    }>;
    components: RenderFunc;
    componentItem: RenderFunc<{
        children: ReactNode;
        name: string;
    }>;
    drawer: RenderFunc;
    drawerItem: RenderFunc<{
        children: ReactNode;
        name: string;
    }>;
    iframe: RenderFunc<{
        children: ReactNode;
        document?: Document;
    }>;
    outline: RenderFunc;
    componentOverlay: RenderFunc<{
        children: ReactNode;
        hover: boolean;
        isSelected: boolean;
        componentId: string;
        componentType: string;
    }>;
    puck: RenderFunc;
}>;
type FieldRenderFunctions<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>, UserField extends {
    type: string;
} = Field | G["UserField"]> = Omit<{
    [Type in UserField["type"]]: React.FunctionComponent<FieldProps<ExtractField<UserField, Type>, any> & {
        children: ReactNode;
        name: string;
    }>;
}, "custom">;

type DragAxis = "dynamic" | "y" | "x";

type iconTypes = "Smartphone" | "Monitor" | "Tablet";
type Viewport = {
    width: number;
    height?: number | "auto";
    label?: string;
    icon?: iconTypes | ReactNode;
};

type Permissions = {
    drag: boolean;
    duplicate: boolean;
    delete: boolean;
    edit: boolean;
    insert: boolean;
} & Record<string, boolean>;
type Plugin<UserConfig extends Config = Config> = {
    overrides?: Partial<Overrides<UserConfig>>;
    fieldTransforms?: FieldTransforms<UserConfig>;
};
type Slot<Props extends {
    [key: string]: DefaultComponentProps;
} = {
    [key: string]: DefaultComponentProps;
}> = {
    [K in keyof Props]: ComponentDataOptionalId<Props[K], K extends string ? K : never>;
}[keyof Props][];

declare const headingAnalyzer: Plugin;

export { headingAnalyzer as default };
