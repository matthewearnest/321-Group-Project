using System;
using api;

namespace api
{
    public class ConnectionString
    {
        public string cs{get; set;}

        public ConnectionString(){
            string host = "migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "f6546175wjqbfhwv";
            string port = "3306";
            string userName = "sifctgglmb9812ns";
            string password = "p20bsk98rfgzhjmr";

            cs = $@"hots = {host}; userName = {userName}; database = {database}; port = {port}; password = {password};";
        }
    }
}