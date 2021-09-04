// middle ware
app.use(cors({origin:"*"}))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:true}))