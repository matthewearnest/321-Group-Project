using System;
using api;

namespace api
{
    public class ConnectionString
    {
        public string cs{get; set;}

        public ConnectionString(){
            string host = "migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "f6546l75wjqbfhwv";
            string port = "3306";
            string userName = "sifctgglmb98l2ns";
            string password = "yt2gytudrngo7x2p";

            cs = $"server={host};port={port};database={database};user={userName};password={password}";
            // cs = "mysql://sifctgglmb98l2ns:yt2gytudrngo7x2p@migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/f6546l75wjqbfhwv";
        }
    }
}