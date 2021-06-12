
export interface IEntity<Type>{

    getAll(filter?: any): Promise<Type[]>;
    getById(id: any): Promise<Type>;
    create(props: Type): Promise<Type>;
    update(id: any, props: any): Promise<Type>;
    delete(id: any): Promise<Type>;

}