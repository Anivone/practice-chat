import {IEntity} from "./IEntity";
import {IAccount} from "../entities/types";
import { Account } from "../entities/Account";

export interface IAccountRepository extends IEntity<IAccount>{}