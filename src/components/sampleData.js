
const sampleData = [
    {
      createdOn: 1622476800, // Example UNIX timestamp
      payer: 'Rixon',
      status: 'Lead',
      email: 'rixon@example.com',
      phone: '123-456-7890',
      services: 'Fitness session',
      scheduledOn: 1623076800, // Example UNIX timestamp
    },
    {
      createdOn: 1623596400, // UNIX timestamp
      payer: 'John Doe',
      status: 'Active',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      services: 'Fitness Session, Aerobic Session',
      scheduledOn: 1623790800, // UNIX timestamp
    },
    {
      createdOn: 1623682800, // UNIX timestamp
      payer: 'Jane Smith',
      status: 'Lead',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      services: 'Boxing Session',
      scheduledOn: 1623877200, // UNIX timestamp
    },
    // Add more entries...
    {
      createdOn: 1625022000, // UNIX timestamp
      payer: 'Michael Johnson',
      status: 'Inactive',
      email: 'michael.johnson@example.com',
      phone: '111-222-3333',
      services: 'Fitness Session, Aerobic Session, Boxing Session',
      scheduledOn: 1625216400, // UNIX timestamp
    },
    {
      createdOn: 1625108400, // UNIX timestamp
      payer: 'Sarah Wilson',
      status: 'Active',
      email: 'sarah.wilson@example.com',
      phone: '444-555-6666',
      services: 'Fitness Session',
      scheduledOn: 1625302800, // UNIX timestamp
    },
    // Add more data objects as needed
    {
      createdOn: 1622476800, // Example UNIX timestamp
      payer: 'Rixon',
      status: 'Lead',
      email: 'rixon@example.com',
      phone: '123-456-7890',
      services: 'Fitness session',
      scheduledOn: 1623076800, // Example UNIX timestamp
    },
    {
      createdOn: 1623596400, // UNIX timestamp
      payer: 'John Doe',
      status: 'Active',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      services: 'Fitness Session, Aerobic Session',
      scheduledOn: 1623790800, // UNIX timestamp
    },
    {
      createdOn: 1623682800, // UNIX timestamp
      payer: 'Jane Smith',
      status: 'Lead',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      services: 'Boxing Session',
      scheduledOn: 1623877200, // UNIX timestamp
    },
    // Add more entries...
    {
      createdOn: 1625022000, // UNIX timestamp
      payer: 'Michael Johnson',
      status: 'Inactive',
      email: 'michael.johnson@example.com',
      phone: '111-222-3333',
      services: 'Fitness Session, Aerobic Session, Boxing Session',
      scheduledOn: 1625216400, // UNIX timestamp
    },
    {
      createdOn: 1625108400, // UNIX timestamp
      payer: 'Sarah Wilson',
      status: 'Active',
      email: 'sarah.wilson@example.com',
      phone: '444-555-6666',
      services: 'Fitness Session',
      scheduledOn: 1625302800, // UNIX timestamp
    },{
      createdOn: 1622476800, // Example UNIX timestamp
      payer: 'Rixon',
      status: 'Lead',
      email: 'rixon@example.com',
      phone: '123-456-7890',
      services: 'Fitness session',
      scheduledOn: 1623076800, // Example UNIX timestamp
    },
    {
      createdOn: 1623596400, // UNIX timestamp
      payer: 'John Doe',
      status: 'Active',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      services: 'Fitness Session, Aerobic Session',
      scheduledOn: 1623790800, // UNIX timestamp
    },
    {
      createdOn: 1623682800, // UNIX timestamp
      payer: 'Jane Smith',
      status: 'Lead',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      services: 'Boxing Session',
      scheduledOn: 1623877200, // UNIX timestamp
    },
    // Add more entries...
    {
      createdOn: 1625022000, // UNIX timestamp
      payer: 'Michael Johnson',
      status: 'Inactive',
      email: 'michael.johnson@example.com',
      phone: '111-222-3333',
      services: 'Fitness Session, Aerobic Session, Boxing Session',
      scheduledOn: 1625216400, // UNIX timestamp
    },
    {
      createdOn: 1625108400, // UNIX timestamp
      payer: 'Sarah Wilson',
      status: 'Active',
      email: 'sarah.wilson@example.com',
      phone: '444-555-6666',
      services: 'Fitness Session',
      scheduledOn: 1625302800, // UNIX timestamp
    },{
      createdOn: 1622476800, // Example UNIX timestamp
      payer: 'Rixon',
      status: 'Lead',
      email: 'rixon@example.com',
      phone: '123-456-7890',
      services: 'Fitness session',
      scheduledOn: 1623076800, // Example UNIX timestamp
    },
    {
      createdOn: 1623596400, // UNIX timestamp
      payer: 'John Doe',
      status: 'Active',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      services: 'Fitness Session, Aerobic Session',
      scheduledOn: 1623790800, // UNIX timestamp
    },
    {
      createdOn: 1623682800, // UNIX timestamp
      payer: 'Jane Smith',
      status: 'Lead',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      services: 'Boxing Session',
      scheduledOn: 1623877200, // UNIX timestamp
    },
    // Add more entries...
    {
      createdOn: 1625022000, // UNIX timestamp
      payer: 'Michael Johnson',
      status: 'Inactive',
      email: 'michael.johnson@example.com',
      phone: '111-222-3333',
      services: 'Fitness Session, Aerobic Session, Boxing Session',
      scheduledOn: 1625216400, // UNIX timestamp
    },
    {
      createdOn: 1625108400, // UNIX timestamp
      payer: 'Sarah Wilson',
      status: 'Active',
      email: 'sarah.wilson@example.com',
      phone: '444-555-6666',
      services: 'Fitness Session',
      scheduledOn: 1625302800, // UNIX timestamp
    },{
      createdOn: 1622476800, // Example UNIX timestamp
      payer: 'Rixon',
      status: 'Lead',
      email: 'rixon@example.com',
      phone: '123-456-7890',
      services: 'Fitness session',
      scheduledOn: 1623076800, // Example UNIX timestamp
    },
    {
      createdOn: 1623596400, // UNIX timestamp
      payer: 'John Doe',
      status: 'Active',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      services: 'Fitness Session, Aerobic Session',
      scheduledOn: 1623790800, // UNIX timestamp
    },
    {
      createdOn: 1623682800, // UNIX timestamp
      payer: 'Jane Smith',
      status: 'Lead',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      services: 'Boxing Session',
      scheduledOn: 1623877200, // UNIX timestamp
    },
    // Add more entries...
    {
      createdOn: 1625022000, // UNIX timestamp
      payer: 'Michael Johnson',
      status: 'Inactive',
      email: 'michael.johnson@example.com',
      phone: '111-222-3333',
      services: 'Fitness Session, Aerobic Session, Boxing Session',
      scheduledOn: 1625216400, // UNIX timestamp
    },
    {
      createdOn: 1625108400, // UNIX timestamp
      payer: 'Sarah Wilson',
      status: 'Active',
      email: 'sarah.wilson@example.com',
      phone: '444-555-6666',
      services: 'Fitness Session',
      scheduledOn: 1625302800, // UNIX timestamp
    },{
      createdOn: 1622476800, // Example UNIX timestamp
      payer: 'Rixon',
      status: 'Lead',
      email: 'rixon@example.com',
      phone: '123-456-7890',
      services: 'Fitness session',
      scheduledOn: 1623076800, // Example UNIX timestamp
    },
    {
      createdOn: 1623596400, // UNIX timestamp
      payer: 'John Doe',
      status: 'Active',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      services: 'Fitness Session, Aerobic Session',
      scheduledOn: 1623790800, // UNIX timestamp
    },
    {
      createdOn: 1623682800, // UNIX timestamp
      payer: 'Jane Smith',
      status: 'Lead',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      services: 'Boxing Session',
      scheduledOn: 1623877200, // UNIX timestamp
    },
    // Add more entries...
    {
      createdOn: 1625022000, // UNIX timestamp
      payer: 'Michael Johnson',
      status: 'Inactive',
      email: 'michael.johnson@example.com',
      phone: '111-222-3333',
      services: 'Fitness Session, Aerobic Session, Boxing Session',
      scheduledOn: 1625216400, // UNIX timestamp
    },
    {
      createdOn: 1625108400, // UNIX timestamp
      payer: 'Sarah Wilson',
      status: 'Active',
      email: 'sarah.wilson@example.com',
      phone: '444-555-6666',
      services: 'Fitness Session',
      scheduledOn: 1625302800, // UNIX timestamp
    },{
      createdOn: 1622476800, // Example UNIX timestamp
      payer: 'Rixon',
      status: 'Lead',
      email: 'rixon@example.com',
      phone: '123-456-7890',
      services: 'Fitness session',
      scheduledOn: 1623076800, // Example UNIX timestamp
    },
    {
      createdOn: 1623596400, // UNIX timestamp
      payer: 'John Doe',
      status: 'Active',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      services: 'Fitness Session, Aerobic Session',
      scheduledOn: 1623790800, // UNIX timestamp
    },
    {
      createdOn: 1623682800, // UNIX timestamp
      payer: 'Jane Smith',
      status: 'Lead',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      services: 'Boxing Session',
      scheduledOn: 1623877200, // UNIX timestamp
    },
    // Add more entries...
    {
      createdOn: 1625022000, // UNIX timestamp
      payer: 'Michael Johnson',
      status: 'Inactive',
      email: 'michael.johnson@example.com',
      phone: '111-222-3333',
      services: 'Fitness Session, Aerobic Session, Boxing Session',
      scheduledOn: 1625216400, // UNIX timestamp
    },
    {
      createdOn: 1625108400, // UNIX timestamp
      payer: 'Sarah Wilson',
      status: 'Active',
      email: 'sarah.wilson@example.com',
      phone: '444-555-6666',
      services: 'Fitness Session',
      scheduledOn: 1625302800, // UNIX timestamp
    },{
      createdOn: 1622476800, // Example UNIX timestamp
      payer: 'Rixon',
      status: 'Lead',
      email: 'rixon@example.com',
      phone: '123-456-7890',
      services: 'Fitness session',
      scheduledOn: 1623076800, // Example UNIX timestamp
    },
    {
      createdOn: 1623596400, // UNIX timestamp
      payer: 'John Doe',
      status: 'Active',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      services: 'Fitness Session, Aerobic Session',
      scheduledOn: 1623790800, // UNIX timestamp
    },
    {
      createdOn: 1623682800, // UNIX timestamp
      payer: 'Jane Smith',
      status: 'Lead',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      services: 'Boxing Session',
      scheduledOn: 1623877200, // UNIX timestamp
    },
    // Add more entries...
    {
      createdOn: 1625022000, // UNIX timestamp
      payer: 'Michael Johnson',
      status: 'Inactive',
      email: 'michael.johnson@example.com',
      phone: '111-222-3333',
      services: 'Fitness Session, Aerobic Session, Boxing Session',
      scheduledOn: 1625216400, // UNIX timestamp
    },
    {
      createdOn: 1625108400, // UNIX timestamp
      payer: 'Sarah Wilson',
      status: 'Active',
      email: 'sarah.wilson@example.com',
      phone: '444-555-6666',
      services: 'Fitness Session',
      scheduledOn: 1625302800, // UNIX timestamp
    },{
      createdOn: 1622476800, // Example UNIX timestamp
      payer: 'Rixon',
      status: 'Lead',
      email: 'rixon@example.com',
      phone: '123-456-7890',
      services: 'Fitness session',
      scheduledOn: 1623076800, // Example UNIX timestamp
    },
    {
      createdOn: 1623596400, // UNIX timestamp
      payer: 'John Doe',
      status: 'Active',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      services: 'Fitness Session, Aerobic Session',
      scheduledOn: 1623790800, // UNIX timestamp
    },
    {
      createdOn: 1623682800, // UNIX timestamp
      payer: 'Jane Smith',
      status: 'Lead',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      services: 'Boxing Session',
      scheduledOn: 1623877200, // UNIX timestamp
    },
    // Add more entries...
    {
      createdOn: 1625022000, // UNIX timestamp
      payer: 'Michael Johnson',
      status: 'Inactive',
      email: 'michael.johnson@example.com',
      phone: '111-222-3333',
      services: 'Fitness Session, Aerobic Session, Boxing Session',
      scheduledOn: 1625216400, // UNIX timestamp
    },
    {
      createdOn: 1625108400, // UNIX timestamp
      payer: 'Sarah Wilson',
      status: 'Active',
      email: 'sarah.wilson@example.com',
      phone: '444-555-6666',
      services: 'Fitness Session',
      scheduledOn: 1625302800, // UNIX timestamp
    },
  ];

export default sampleData;