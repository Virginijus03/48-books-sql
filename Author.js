const Author = {};

/**
 * Autoriaus irasymas i duomenu baze.
 * @param {Object} connection Objektas, su kuriuo kvieciame duombazes mainpuliavimo metodus.
 * @param {string} authorFirstname Autoriaus vardas.
 * @param {string} authorLastname Autoriaus pavarde.
 * @returns {Promise<string>} Tekstas, apibudinantis, koks autorius buvo irasytas i duomenu baze.
 */
Author.create = async (connection, authorFirstname, authorLastname) => {
    const sql = 'INSERT INTO `authors` \
                    (`id`, `firstname`, `lastname`) \
                VALUES (NULL, " '+ authorFirstname + ' ", "' + authorLastname + '")';
    const [rows] = await connection.execute(sql);
    return `${authorFirstname} ${authorLastname}, buvo sekmingai sukurtas vartotojas!`;
}

/**
 *  Visu autoriu sarasas.
 * @param {Object} connection Objektas, su kuriuo kvieciame duombazes mainpuliavimo metodus.
 * @returns {Promise<Object[]>}  Tekstas, apibudinantis, kokie autoriai uzregistruoti duomenu bazeje.
 */
Author.listAll = async (connection) => {
    const sql = 'SELECT * FROM `authors`';
    const [rows] = await connection.execute(sql);
    let list = [];
    let ind = 0;
    for (const author of rows) {
        list.push(`${++ind}.${author.firstname} ${author.lastname}`);
    }
    const title = 'Autoriu sarasas:\n';
    return title + list.join('\n');
}

/**
 * Randama autorius info pagal id.
 * @param {Object} connection Objektas, su kuriuo kvieciame duombazes mainpuliavimo metodus.
 * @param {Number} authorId Autoriaus Id numeris.
 * @returns {Promise<Object[]>} Tekstas kuris grazina autoriaus varda ir ID pagal ieskoma ID.
 */
Author.findById = async (connection, authorId) => {
    const sql = 'SELECT * FROM `authors` WHERE `id` =' + authorId;
    const [rows] = await connection.execute(sql);
    return `Rastas autorius${rows[0].firstname}, pagal id ${rows[0].id}.`
}

Author.findByFirstname = async (connection, authorFirstname) => {
}

Author.findByLastname = async (connection, authorLastname) => {
}

Author.updatePropertyById = async (connection, authorId, propertyName, propertyValue) => {
}

Author.delete = async (connection, authorId) => {
}

module.exports = Author;