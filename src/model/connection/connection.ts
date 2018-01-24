export type SqlConfig = {
    host: string,
    dbName: string,
    dbPass: string
}

export type BigQConf = {
    dataset: string,
    email: string
}

export type ConnectionConf = SqlConfig | BigQConf

export type Connection<Config extends ConnectionConf> = {
    name: string,
    profile: string,
    config: Config
}